export default function Story(story) {
    return `
    <div class="story">
        <div>
            <span class="gray">${story.index}</span>
            <span class="upvote">▲</span>
            <a href="${story.url}">${story.title}</a>
            <span>(${story.domain})</span>
        </div>
        <div>
            <div class="grey">
                ${story.points} points by ${story.user} ${story.time_ago}
                |
                <a href="#/item?id=${story.id}">
                    ${story.comments_count} comment
                </a>
                |
                <span class="favorite">
                    <img class="heart" src="https://icon.now.sh/heart/ccc">
                    Add to favourites
                </span>
            </div>
        </div>
    </div>
    `
}
