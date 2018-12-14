import {Tweet} from '../interfaces';

const tweetsHelper = {
    generateTweet: (index: number): Tweet => {
        const authors = [
            { name: 'Grégory Copin', email: 'gregcop1@gmail.com', account: '@gregcop1' },
            { name: 'Vincent Chalamon', email: 'vincent@les-tilleuls.coop', account: '@vincentchalamon' },
            { name: 'Marion Kaamos', email: 'marion@les-tilleuls.coop', account: '@CrimsonKaamos' },
            { name: 'Baptiste Meÿer', email: 'baptiste@les-tilleuls.coop', account: '@meyer_baptiste' },
            { name: 'Rodrigue Villetard', email: 'rodrigue@les-tilleuls.coop', account: '@gorghoa' },
            { name: 'Kevin Dunglas', email: 'kevin@les-tilleuls.coop', account: '@dunglas' },
        ];
        const sentences = [
            'How to #Test JavaScript with Mocha — The Basics.',
            'How WebKit Built A New Benchmark To Improve JavaScriptCore.',
            'What is your current favorite CSS in JS lib for #react components and why?',
            'Survey: Node.js Developers Struggle with Debugging and Downtimes',
            'What\'s Coming After ES6: The Future of JavaScript #ES6',
            'Kyle Simpson\'s "Deep Foundations of JS" Course in London… (We\'ve got Kyle back in London in four weeks time.)',
            'It\'s five years this week since @Angular reached 1.0. 🗓',
            'Camaro: A High Performance XML to JSON Converter - https://github.com/tuananh/camaro  (Uses bindings to pugixml, a fast C++ XML parser.)',
            'Larung Gar, the world\'s largest center of Tibetan Buddhist learning, is one of the most stunning visions on earth',
            '"They say exploration is in our DNA, but exploration is what happens when we go against our own biology." #NatGeoFest',
            'Saying you hate a programming language is a sign of developer immaturity. They emerge and develop in contexts you might not be aware of.',
            'Spend some QT with yourself this weekend -- follow the ‘self’ topic for perspectives on how to live better.',
            'That\'s @symfony_live London booked! My first conference! Can\'t wait! Excited much 🙈😃 #PHP #webdevelopment #symfony @fabpot @symfonyuk',
            'Call for Papers for #Symfony_Live San Francisco 2017 is open! Submit your talk proposals now #Symfony, #PHP http://bit.ly/2rI3PgX ',
            '#CFP for #Symfony_Live San Francisco 2017 is open! Submit your talk proposals before June 20th http://sanfrancisco2017.live.symfony.com/ ',
            '#Symfony_Live Berlin 2017 Webseite ist bereits online, Tickets können gekauft werden - Es gibt 50 Blind Bird Tickets',
            'Encore un excellent ChtiJS hier soir. Merci à tous d\'être venu ! Merci @NicoPennec @dunglas @EmmanuelDemey pour les talks.',
        ];
        const createdAt = new Date().getTime() - Math.floor(Math.random() * 1000000);

        return {
            author: authors[Math.floor(Math.random() * authors.length)],
            date: createdAt,
            image: 2 === Math.floor(Math.random() * 3) ? `http://lorempixel.com/500/280/technics/${index % 10}` : null,
            message: sentences[Math.floor(Math.random() * authors.length)],
            shares: {
                answer: Math.floor(Math.random() * 20),
                like: Math.floor(Math.random() * 500),
                retweet: Math.floor(Math.random() * 50),
            }
        };
    },

    generateTweets: (count: number): Tweet[] => {
        let tweets: Tweet[] = [];

        for (let i = 0; i < count; i++) {
            tweets.push(tweetsHelper.generateTweet(i))
        }

        return tweets.sort((a, b) => {
            if (a.date < b.date)
                return 1;
            if (a.date > b.date)
                return -1;

            return 0;
        });
    }
};

export default tweetsHelper;
