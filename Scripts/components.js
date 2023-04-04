function jasonNavbar() {
    return {
        open: false,
        entries: [
            { label: 'home', link: '#home', prefix: '01. ' },
            { label: 'about', link: '#about', prefix: '02. ' },
            { label: 'skills', link: '#skills', prefix: '03. ' },
            { label: 'experience', link: '#experience', prefix: '04. ' },
            { label: 'contact', link: '#contact', prefix: '05. ' },
        ],
    };
}
const home = function () {
    let $refs;

    return {
        setup(refs) {
            $refs = refs;
        },
        play() {
            this.showVideo = true;
            $refs.youtubeEmbeddedVideo.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        },
        hide() {
            this.showVideo = false;
            $refs.youtubeEmbeddedVideo.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        },
        showVideo: false,
    };
};

window.jasonNavbar = jasonNavbar;
window.$home = home;

const skills = function () {
    return {
        languages: [
            {
                name: 'HTML',
                image: './images/html5.svg',
                description:
                    'HTML is essential for creating web content with a wide range of applications, constantly evolving to meet changing needs and remaining vital.',
            },
            {
                name: 'CSS',
                image: './images/css.svg',
                description: 'CSS is critical for creating visually appealing and consistent web designs across devices and platforms.',
            },
            {
                name: 'JavaScript',
                image: './images/js.svg',
                description:
                    'JavaScript has grown to become one of the most popular programming languages in the world, with a large and active developer community.',
            },
        ],
        async load() {
            const res = await fetch('https://nextjs-red-six-46.vercel.app/api/wakatime/jachen102', { method: 'GET' });
            const stats = await res.json();
            const { data } = stats;
            const languagesIWant = ['HTML', 'CSS', 'JavaScript'];
            const languageStatsList = data.languages.filter(l => languagesIWant.indexOf(l.name) !== -1);
            for (let i = 0; i < languageStatsList.length; i++) {
                const languageStats = languageStatsList[i];
                const targetLanguage = this.languages.find(l => l.name === languageStats.name);
                targetLanguage.hours = languageStats.hours;
                targetLanguage.decimal = languageStats.decimal;
            }
        },
        progress(language) {
            const percentage = (language.decimal / 320) * 100;
            return `${percentage}%`;
        },
    };
};
window.$skills = skills;
function experience() {
    return {
        jobs: [
            {
                title: 'FamilySearch - QA Engineer',
                date: '09/2019 - 02/2021',
                description: 'Ensuring the quality and success of software development projects to meets the standards and performs as expected.',
                duties: 'Manual software testing, designing functional tests, integration tests, and end-to-end tests.',
            },
            {
                title: 'FamilySearch - QA Engineer',
                date: '09/2019 - 02/2021',
                description: 'Ensuring the quality and success of software development projects to meets the standards and performs as expected.',
                duties: 'Manual software testing, designing functional tests, integration tests, and end-to-end tests.',
            },
            {
                title: 'FamilySearch - QA Engineer',
                date: '09/2019 - 02/2021',
                description: 'Ensuring the quality and success of software development projects to meets the standards and performs as expected.',
                duties: 'Manual software testing, designing functional tests, integration tests, and end-to-end tests.',
            },
        ],
    };
}

window.experience = experience;
