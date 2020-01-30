import React, { useEffect, useRef } from 'react'
import Date from "Menu/Shared/components/Date"
import 'Shared/Resources/Background/BackgroundStyle.css'

const Background = ({ season, year }) => {
	let html = useRef(),
		rainbow = useRef(),
		rabbit = useRef(),
		snow = useRef(),
		rain = useRef(),
		flowers = useRef();
    const lightColours = ["#93d5eb", "#add63a", "#c5d63a", "#febe42"]
    const mediumColours = ["#66bbd8", "#92c938", "#acc52b", "#ff9d25"]
    const darkColours = ["#4da2bb", "#2a9d5c", "#89a503", "#ff6b2f"]
    const backgroundColours = ["#cbe9f4", "#daf8ff", "#feec98", "#ffdc8a"]
    const bushColours = ["#ffffff", "#3ebf6d", "#99b31a", "#fd6d2e"]
    const cloudColours = ["#ffffff", "#ffffff", "#ffffff", "#eaf9fe"]
  
	useEffect(() => {
        html.current = document.getElementsByTagName("html")[0];
        rainbow.current = document.querySelector(".rainbow");
        rabbit.current = document.querySelector(".rabbit");
        snow.current = document.querySelectorAll(".snow");
        rain.current = document.querySelectorAll(".rain");
        flowers.current = document.querySelectorAll(".flower");
    }, [])

	const updateSeasons = (c) => {
		html.current.style.setProperty("--bgd-color", backgroundColours[c]);
		html.current.style.setProperty("--light", lightColours[c]);
		html.current.style.setProperty("--medium", mediumColours[c]);
		html.current.style.setProperty("--dark", darkColours[c]);
		html.current.style.setProperty("--bush", bushColours[c]);
		html.current.style.setProperty("--cloud", cloudColours[c]);

		//add snow if season = winter
		snow.current.forEach(function(el) {
			c !== 0
				? (el.style.display = "none")
				: (el.style.display = "block");
		});

		//add rabbit if season = winter
		if (c === 0 || c === 2) {
			rabbit.current.classList.add("animated");
		} else {
			rabbit.current.classList.remove("animated");
		}

		//add rainbow if season = spring
		c === 1
			? rainbow.current.classList.add("animated")
			: rainbow.current.classList.remove("animated");
		if (c === 1) {
			html.current.style.setProperty("--rabbit", "#9E6255");
		}
		//add flowers if season = spring
		flowers.current.forEach(function(el) {
			c === 1
				? el.classList.add("animated")
				: el.classList.remove("animated");
		});

		//add sun and rabbit if season = summer
		if (c === 2) {
			html.current.style.setProperty("--sun", "#ffb53a");
			html.current.style.setProperty("--rabbit", "#9E6255");
		} else {
			html.current.style.setProperty("--sun", "transparent");
			html.current.style.setProperty("--rabbit", "#ffffff");
		}

		//add rain if season = autumn
		rain.current.forEach(function(el) {
			c === 3
				? (el.style.display = "block")
				: (el.style.display = "none");
			});
	}

useEffect(() => {
    updateSeasons(season)
}, [season])



//animate all
function animate() {
 requestAnimationFrame(animate);
}

animate();
    return (
<div className="container">
  {/*<Date year={year} season={season}/>*/}
  <div className="season"></div>
  <div className="sun"></div>
  <div className="rainbow">
    <div className="rainbow-colour"></div>
    <div className="rainbow-colour"></div>
    <div className="rainbow-colour"></div>
    <div className="rainbow-colour"></div>
    <div className="rainbow-colour"></div>
    <div className="rainbow-colour"></div>
    <div className="rainbow-colour"></div>
  </div>
  <div className="cloud-group">
    <div className="cloud">
      <div className="weather-container">
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
      </div>
    </div>
    <div className="cloud">
      <div className="weather-container">
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
      </div>
    </div>
    <div className="cloud">
      <div className="weather-container">
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
      </div>
    </div>
    <div className="cloud">
      <div className="weather-container">
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
      </div>
    </div>
    <div className="cloud">
      <div className="weather-container">
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
      </div>
    </div>
    <div className="cloud">
      <div className="weather-container">
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
      </div>
    </div>
    <div className="cloud">
      <div className="weather-container">
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
      </div>
    </div>
    <div className="cloud">
      <div className="weather-container">
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
        <div className="rain"></div>
      </div>
    </div>
  </div>
  <div className="base">
    <div className="bush-group">
      <div className="bush"></div>
      <div className="bush"></div>
      <div className="bush"></div>
      <div className="bush"></div>
      <div className="bush"></div>
      <div className="bush"></div>
      <div className="bush"></div>
      <div className="bush"></div>
      <div className="bush"></div>
    </div>
    <div className="rabbit animated">
      <div className="head">
        <div className="ear"></div>
        <div className="ear"></div>
      </div>
    </div>
    <div className="tree-group">
      <div className="tree">
        <div className="trunk"></div>
        <div className="tree-top"></div>
      </div>
      <div className="tree">
        <div className="trunk"></div>
        <div className="tree-top"></div>
      </div>
      <div className="tree">
        <div className="trunk"></div>
        <div className="tree-top"></div>
      </div>
      <div className="tree">
        <div className="trunk"></div>
        <div className="branch"></div>
        <div className="branch"></div>
        <div className="branch"></div>
        <div className="branch"></div>
        <div className="branch"></div>
        <div className="branch"></div>
        <div className="branch"></div>
        <div className="branch"></div>
        <div className="branch"></div>
        <div className="branch"></div>
        <div className="branch"></div>
        <div className="branch"></div>
      </div>
      <div className="tree">
        <div className="trunk"></div>
        <div className="tree-top"></div>
        <div className="tree-top"></div>
        <div className="branch-two">
          <div className="tree-top"></div>
        </div>
        <div className="branch-two">
          <div className="tree-top"></div>
        </div>
        <div className="branch-two">
          <div className="tree-top"></div>
        </div>
      </div>
      <div className="tree">
        <div className="trunk"></div>
        <div className="tree-top"></div>
      </div>
      <div className="tree">
        <div className="trunk"></div>
        <div className="tree-top"></div>
      </div>
      <div className="tree">
        <div className="trunk"></div>
        <div className="tree-top">
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
        </div>
        <div className="tree-top"></div>
        <div className="tree-top"></div>
        <div className="flower">
          <div className="flower-in"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
        </div>
        <div className="flower">
          <div className="flower-in"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
        </div>
      </div>
      <div className="tree">
        <div className="trunk"></div>
        <div className="tree-top"> </div>
      </div>
      <div className="tree">
        <div className="trunk"></div>
        <div className="branch">
          <div className="branch-in"></div>
          <div className="pine-cone-row">
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
          </div>
        </div>
        <div className="branch">
          <div className="branch-in"></div>
          <div className="pine-cone-row">
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
          </div>
        </div>
        <div className="branch">
          <div className="branch-in"></div>
          <div className="pine-cone-row">
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
          </div>
        </div>
        <div className="branch">
          <div className="branch-in"></div>
          <div className="pine-cone-row">
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
          </div>
        </div>
        <div className="branch">
          <div className="branch-in"></div>
          <div className="pine-cone-row">
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
          </div>
        </div>
        <div className="branch">
          <div className="branch-in"></div>
          <div className="pine-cone-row">
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
          </div>
        </div>
        <div className="branch">
          <div className="branch-in"></div>
          <div className="pine-cone-row">
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
          </div>
        </div>
        <div className="branch">
          <div className="branch-in"></div>
          <div className="pine-cone-row">
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
          </div>
        </div>
        <div className="branch">
          <div className="branch-in"></div>
          <div className="pine-cone-row">
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
          </div>
        </div>
        <div className="branch">
          <div className="branch-in"></div>
          <div className="pine-cone-row">
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
            <div className="pine-cone"></div>
          </div>
        </div>
      </div>
      <div className="tree">
        <div className="trunk"></div>
        <div className="tree-top"></div>
        <div className="tree-top"></div>
        <div className="tree-top"></div>
      </div>
      <div className="tree">
        <div className="trunk"> </div>
        <div className="tree-top">
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
        </div>
        <div className="tree-top"></div>
        <div className="tree-top"></div>
        <div className="flower">
          <div className="flower-in"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
        </div>
        <div className="flower">
          <div className="flower-in"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
        </div>
      </div>
      <div className="tree">
        <div className="trunk"></div>
        <div className="tree-top"> </div>
        <div className="tree-top"></div>
        <div className="tree-top"></div>
        <div className="branch-two">
          <div className="tree-top"></div>
        </div>
        <div className="branch-two">
          <div className="tree-top"></div>
        </div>
      </div>
      <div className="tree">
        <div className="trunk"></div>
        <div className="tree-top">
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
        </div>
        <div className="tree-top">
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
        </div>
        <div className="tree-top">
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
          <div className="cone"> </div>
        </div>
      </div>
      <div className="tree">
        <div className="trunk"></div>
        <div className="tree-top">
          <div className="cone">      </div>
          <div className="cone">      </div>
          <div className="cone">      </div>
          <div className="cone">      </div>
          <div className="cone">      </div>
          <div className="cone">      </div>
          <div className="cone">      </div>
          <div className="cone">      </div>
          <div className="cone">      </div>
          <div className="cone">      </div>
          <div className="cone">      </div>
          <div className="cone">      </div>
          <div className="cone">      </div>
          <div className="cone">      </div>
          <div className="cone">      </div>
          <div className="cone">      </div>
          <div className="cone">      </div>
          <div className="cone">      </div>
          <div className="cone">      </div>
          <div className="cone">      </div>
        </div>
        <div className="tree-top">
          <div className="cone">       </div>
          <div className="cone">       </div>
          <div className="cone">       </div>
          <div className="cone">       </div>
          <div className="cone">       </div>
          <div className="cone">       </div>
          <div className="cone">       </div>
          <div className="cone">       </div>
          <div className="cone">       </div>
          <div className="cone">       </div>
          <div className="cone">       </div>
          <div className="cone">       </div>
          <div className="cone">       </div>
          <div className="cone">       </div>
          <div className="cone">       </div>
          <div className="cone">       </div>
          <div className="cone">       </div>
          <div className="cone">       </div>
          <div className="cone">       </div>
          <div className="cone">       </div>
        </div>
        <div className="tree-top">
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
          <div className="cone"></div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default React.memo(Background)