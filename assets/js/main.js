/*
	Telephasic by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			normal:    [ '1081px',  '1280px'  ],
			narrow:    [ '821px',   '1080px'  ],
			narrower:  [ '737px',   '820px'   ],
			mobile:    [ '481px',   '736px'   ],
			mobilep:   [ null,      '480px'   ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			speed: 300,
			alignment: 'center',
			noOpenerFade: true
		});

	// Nav.

		// Button.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						'<a href="index.html" class="link depth-0">Home</a>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					resetScroll: true,
					resetForms: true,
					side: 'top',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);

//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
	const choice = document.querySelector('input').value
	const url = `https://www.dnd5eapi.co/api/monsters/${choice}`

	fetch(url)
    	.then(res => res.json()) // parse response as JSON
		.then(data => {
        console.log(data);
        document.querySelector('h3').innerText = data.type
        document.querySelector('h4').innerText = data.armor_class
        document.querySelector('h5').innerText = data.hit_points
        // console.log(data.subclasses[0].name);
        // console.log(data.subclasses[1].name);
      //   data.type.forEach( obj => {
      //       console.log(obj.name)
      //       // create an li
      //       const li = document.createElement('li')
      //       // add text to li
      //       li.textContent = obj.name
      //       // append the li to the ul
      //       document.querySelector('ul').appendChild(li) // would innerText work? try it! nope, it said innerText is not a function. 
      //   } ) //append (put something in or on) to the dom, el is element. now we are looping through an array of objects. 
      // })
      // .catch(err => {
      //     console.log(`error ${err}`)
    });
}