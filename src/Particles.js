import React, {Component} from 'react'
import Particles from 'react-particles-js'


class ParticlesContainer extends Component {
	render(){
		return (
			  <Particles className="particles-js" 
             params={{
                  "particles": {
                  "number": {
                    "value": 40,
                    "density": {
                      "enable": true,
                      "value_area": 500
                    }
                  },
                  "color": {
                    "value": "#ffffff"
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0,
                      "color": "#000000"
                    },
                    "polygon": {
                      "nb_sides": 5
                    },
                    "image": {
                      "src": "img/github.svg",
                      "width": 10,
                      "height": 10
                    }
                  },
                  "opacity": {
                    "value": 0.4,
                    "random": true,
                    "anim": {
                      "enable": true,
                      "speed": 0.1,
                      "opacity_min": 0.1,
                      "sync": true
                    }
                  },
                  "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 60,
                      "size_min": 0.1,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#0000ff",
                    "opacity": 0.6,
                    "width": 1
                  },
                  "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "window",
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "grab"
                    },
                    "onclick": {
                      "enable": true,
                      "mode": "push"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 200,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 200,
                      "size": 10,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
              }}
            />

			)
	}
}
export default ParticlesContainer