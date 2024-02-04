// toggle icon navbar
//scroll sections
Let sections = document.querySelectorAll('section');
Let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        Let top = window.scrollY;
        Let offset = sec.offsetTop - 100;
        Let height = sec.offsetHeight;
        Let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //active navbar Links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
    //sticky header
    Let header = document.querySelector('header');
    header.classList.toggle('sticky'.window.scrollY > 100);
}
document.addEventListener('DOMContentLoaded', function () {
    var moreAboutMeBtn = document.getElementById('moreAboutMeBtn');
    var descriptionContainer = document.getElementById('descriptionContainer');

    moreAboutMeBtn.addEventListener('click', function () {
        // Toggle the display property of the description container
        if (descriptionContainer.style.display === 'none' || descriptionContainer.style.display === '') {
            descriptionContainer.style.display = 'block';
            // Update the description content
            descriptionContainer.innerHTML = "<p>This is the detailed description about yourself.</p>";
        } else {
            descriptionContainer.style.display = 'none';
        }
    });
});