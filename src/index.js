import { catFacts } from "./cat-facts";'./cat-facts.js';
// import 'jspolyfill-array.prototype.find';


const printCatFacts = () => {
    catFacts.forEach(fact => {
        console.log(fact)
    });
}

const printTheOneAboutVision = () => {
    console.log(catFacts.find(fact => fact === "cats are nearsighted, but their peripheral vision and night vision are much better than that of humans."))
}

printTheOneAboutVision()