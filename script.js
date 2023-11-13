var mainPhrases = ['أهلا يا فُلة', 'الموقع ده معمول علشانك انتي', 'هو مجرد فكرة بسيطة فكرت فيها علشان أفرحك', 'أتمنى تشوفي الذكريات الي محتفظ بيها وبحبها منك استني ثواني'];
var endPhrases = [
 'دي صورة مجمعة الألبومات بتاعتك وفيهم كل الي بتحبيه',
 'ودي صورة التومية الجامدة الي مع الشاورما البطاطس', 
 'كدا الشيف الشربيني ابتدى يغير', 
 'حواوشي جامد جمودة', 
 'ومحلات الشاورما السوري كدا هتقفل على فكرة', 
 'بشاميل أفنوني', 
 'كيكة شبكة العنكبوت  الأفنونية'];
var outerPhrases = [
'أنا بحب الذكريات دي وبحبك أكتر منها'
, 'ومش عايزك في يوم زعلانة ولا مخنوقة ',
 'نفسي تذاكري وتبقي أشطر كودر وتجيب إمتياز علشان بحبك دايما ناجحة وشطورة',
  'بحبك يا فُلة'];

var textContainer = document.getElementById('textContainer');
var mainPhrasesElement = document.getElementById('mainPhrases');
var imageContainer = document.getElementById('imageContainer');
var endPhrasesElement = document.getElementById('endPhrases');
var outerPhrasesElement = document.getElementById('outerPhrases');

function displayPhrases(phrases, container, callback) {
    var currentIndex = 0;

    function displayNextPhrase() {
        container.innerHTML = phrases[currentIndex];
        container.classList.add('fadeIn');
        currentIndex++;

        if (currentIndex === phrases.length) {
            setTimeout(function () {
                container.classList.remove('fadeIn');
                currentIndex = 0;
                setTimeout(callback, 5000);
            }, 5000);
        } else {
            setTimeout(displayNextPhrase, 5000);
        }
    }

    displayNextPhrase();
}

function displayImagesWithEndPhrases() {
    var currentIndex = 0;

    function displayNextImageWithEndPhrase() {
        if (currentIndex < endPhrases.length) {
            var img = document.createElement('img');
            img.src = 'img' + (currentIndex + 1) + '.jpg'; // Replace with the actual image path
            imageContainer.innerHTML = '';
            imageContainer.appendChild(img);

            var endPhrase = document.createElement('div');
            endPhrase.classList.add('phrases');
            endPhrase.innerHTML = endPhrases[currentIndex];
            imageContainer.appendChild(endPhrase);

            img.style.animationDelay = '0s';
            img.style.opacity = 1;
            endPhrase.style.animationDelay = '0s';
            endPhrase.style.opacity = 1;

            currentIndex++;

            setTimeout(function () {
                img.classList.remove('fadeIn');
                endPhrase.classList.remove('fadeIn');
                displayNextImageWithEndPhrase();
            }, 5000);
        } else {
            setTimeout(clearImagesAndDisplayOuterPhrases, 5000);
        }
    }

    displayNextImageWithEndPhrase();
}

function clearImagesAndDisplayOuterPhrases() {
    imageContainer.innerHTML = '';
    displayPhrases(outerPhrases, outerPhrasesElement, function () {
        outerPhrasesElement.lastElementChild.style.animation = 'none'; // Disable animation for the last phrase
    });
}

displayPhrases(mainPhrases, mainPhrasesElement, displayImagesWithEndPhrases);
