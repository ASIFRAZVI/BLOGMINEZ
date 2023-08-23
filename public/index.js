// Get the "posts" div element
const postsContainer = document.getElementById("posts");

// Function to display the blog posts
function displayBlogPosts(posts) {
  posts.forEach(post => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    const titleElement = document.createElement("h2");
    titleElement.textContent = post.title;

    const contentElement = document.createElement("p");
    const excerpt = post.content.slice(0, 150); // Show only an excerpt of the content
    contentElement.textContent = excerpt;
    contentElement.classList.add("post-content"); // Add a class for styling

    const readMoreButton = document.createElement("button");
    readMoreButton.textContent = "Read More";
    readMoreButton.classList.add("read-more-button"); // Add a class for styling

    // Event listener for the "Read More" button
    readMoreButton.addEventListener("click", () => {
      contentElement.textContent = post.content; // Show full content when clicked
      readMoreButton.style.display = "none"; // Hide the "Read More" button
    });

    postElement.appendChild(titleElement);
    postElement.appendChild(contentElement);
    postElement.appendChild(readMoreButton);

    postsContainer.appendChild(postElement);
  });
}

// Fetch the blog posts from the API
fetch('/getPosts')
  .then(response => response.json())
  .then(posts => {
    console.log('Fetched posts:', posts);
    displayBlogPosts(posts);
    console.log('Displayed posts:', postsContainer.innerHTML);
  })
  .catch(error => {
    console.error('Error fetching blog posts:', error);
  });

// Get references to the menu button and menu content
const menuButton = document.getElementById('menu-button');
const menuContent = document.querySelector('.menu');

// Toggle the menu content when the button is clicked
menuButton.addEventListener('click', () => {
  menuContent.classList.toggle('active');
});
