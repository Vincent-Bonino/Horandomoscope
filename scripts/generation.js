// Random seeding
const today_date = new Date()
const seed = today_date.getDate() + today_date.getMonth() * Math.pow(10, 2) + today_date.getFullYear() * Math.pow(10, 4)  // Generate number ddmmyyyy
const generator = Math.seedrandom(seed.toString())

function generate_content() {
    for (var i = 0; i < signes.length; i++) {
        signe = signes[i]
        signe_content = `${signe}-content`

        content_div = document.getElementById(signe_content)
        content_div.innerHTML = random_content()
      }
}

function random_content() {
    // Work
    do {
        work_index = Math.floor(Math.random() * work_list.length)
    } while (used_work.includes(work_index))
    used_work.push(work_index)
    result = content_structure.replace("<work_data>", work_list[work_index])

    // Social
    do {
        social_index = Math.floor(Math.random() * social_list.length)
    } while (used_social.includes(social_index))
    used_social.push(social_index)
    result = result.replace("<social_data>", social_list[social_index])

    // Love
    do {
        love_index = Math.floor(Math.random() * love_list.length)
    } while (used_love.includes(love_index))
    used_love.push(love_index)
    result = result.replace("<love_data>", love_list[love_index])

    // Advice
    do {
        advice_index = Math.floor(Math.random() * advice_list.length)
    } while (used_advice.includes(advice_index))
    used_advice.push(advice_index)
    result = result.replace("<advice_data>", advice_list[advice_index])

     return result
}

// Data utils
const signes = ["Belier", "Taureau", "Gemeaux", "Cancer", "Lion", "Vierge", "Balance", "Scorpion", "Sagitaire", "Capricorne", "Verseau", "Poissons"]
const content_structure = `
<h3>Travail</h3>
<work_data>
<h3>Vie sociale</h3>
<social_data>
<h3>Amour</h3>
<love_data>
<h3>Conseil du jour</h3>
<advice_data>
`

// Ensure no self-rendundancy
const used_work = []
const used_social = []
const used_love = []
const used_advice = []
