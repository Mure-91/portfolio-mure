import { useEffect, useRef } from 'react'
import { Renderer, Program, Mesh, Color, Triangle } from 'ogl'
import { VERT, FRAG } from './AuroraShaders.js'



export const DotShaderBackground = () => {
  const propsRef = useRef({
    colorStops: ['#ffffff', '#000000', '#8762f7'],
    amplitude: 1.0,
    blend: 0.08,
    speed: 0.6
  })
  const ctnDom = useRef(null)

  useEffect(() => {
    const ctn = ctnDom.current
    if (!ctn) return

    let renderer
    let gl
    try {
      renderer = new Renderer({ alpha: true, premultipliedAlpha: true, antialias: true })
      gl = renderer.gl
      gl.clearColor(0, 0, 0, 0)
      gl.enable(gl.BLEND)
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)
      gl.canvas.style.backgroundColor = 'transparent'

    const isWebGL2 = typeof WebGL2RenderingContext !== 'undefined' && gl instanceof WebGL2RenderingContext
    if (!isWebGL2) {
      ctn.style.background = 'linear-gradient(180deg, rgba(15,23,42,0.9) 0%, rgba(14,22,38,0.7) 40%, rgba(12,20,34,0.8) 100%)'
      return
    }
    } catch {
      ctn.style.background = 'linear-gradient(180deg, rgba(15,23,42,0.9) 0%, rgba(14,22,38,0.7) 40%, rgba(12,20,34,0.8) 100%)'
      return
    }

    let program

    function resize() {
      if (!ctn) return
      const width = ctn.offsetWidth
      const height = ctn.offsetHeight
      renderer.setSize(width, height)
      if (program) {
        program.uniforms.uResolution.value = [width, height]
      }
    }
    window.addEventListener('resize', resize)

    const geometry = new Triangle(gl)
    if (geometry.attributes.uv) {
      delete geometry.attributes.uv
    }

    const colorStopsArray = propsRef.current.colorStops.map((hex) => {
      const c = new Color(hex)
      return [c.r, c.g, c.b]
    })

    try {
      program = new Program(gl, {
        vertex: VERT,
        fragment: FRAG,
        uniforms: {
          uTime: { value: 0 },
          uAmplitude: { value: propsRef.current.amplitude },
          uColorStops: { value: colorStopsArray },
          uResolution: { value: [ctn.offsetWidth, ctn.offsetHeight] },
          uBlend: { value: propsRef.current.blend }
        }
      })
    } catch {
      ctn.style.background = 'linear-gradient(180deg, rgba(15,23,42,0.9) 0%, rgba(14,22,38,0.7) 40%, rgba(12,20,34,0.8) 100%)'
      return
    }

    const mesh = new Mesh(gl, { geometry, program })
    ctn.appendChild(gl.canvas)

    let animateId = 0
    const update = (t) => {
      animateId = requestAnimationFrame(update)
      const { speed = 1.0 } = propsRef.current
      program.uniforms.uTime.value = t * 0.01 * speed * 0.1
      program.uniforms.uAmplitude.value = propsRef.current.amplitude
      program.uniforms.uBlend.value = propsRef.current.blend
      program.uniforms.uColorStops.value = (propsRef.current.colorStops).map((hex) => {
        const c = new Color(hex)
        return [c.r, c.g, c.b]
      })
      renderer.render({ scene: mesh })
    }
    animateId = requestAnimationFrame(update)

    resize()

    return () => {
      cancelAnimationFrame(animateId)
      window.removeEventListener('resize', resize)
      if (ctn && gl.canvas.parentNode === ctn) {
        ctn.removeChild(gl.canvas)
      }
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [])

  return <div ref={ctnDom} className="w-full h-full pointer-events-none" />
}
