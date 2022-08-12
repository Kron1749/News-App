import Story from "../components/Story.js"
import Comment from "../components/Comment.js"
import view from "../utils/view.js"
import baseUrl from "../utils/baseUrl.js"

export default async function Item() {
    let story = null
    let hasError = false
    let hasComments = false
    try {
        story = await getStory()
        hasComments = story.comments.length > 0
    } catch (error) {
        hasError = true
        console.log(error)
    }

    if (hasError) {
        view.innerHTML = `<div class="error">Erro fetching story</div>`
    }
    view.innerHTML = `
    <div>
        ${Story(story)}
    </div>
    <hr/>
    ${hasComments ? story.comments.map((comment) => Comment(comment)).join("") : "No comments"}`
}

async function getStory() {
    const storyId = window.location.hash.split("?id=")[1]
    const response = await fetch(`${baseUrl}/item/${storyId}`)
    const story = await response.json()
    return story
}
