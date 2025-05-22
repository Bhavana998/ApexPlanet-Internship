document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.getElementById("main-content");
    const navLinks = document.querySelectorAll(".nav-link");

    // Sections content
    const sections = {
        home: `
            <section class="hero">
                <h2>Welcome to My Blog</h2>
                <p>Explore exciting articles about technology, design, and everyday life. Dive into stories crafted to inspire and inform.</p>
            </section>
        `,
        posts: `
            <section id="posts" class="posts">
                <h2>Recent Posts</h2>
                <div class="post" data-id="1">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5KXDNeCwRNx1V55Bc9OJ6Tndh2r509wCpaQ&s" alt="Tech Trends" style="width: 200px; height: 200px;">

                    <h3>Top 5 Tech Trends in 2025</h3>
                    <p>Discover the future of technology and innovation...</p>
                    <button class="read-more" data-id="1">Read More</button>
                </div>
                <div class="post" data-id="2">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJRBr2SXGF2D_nnmb7pD8Q1iA_8Ql9cX1zg&s" alt="Tech Trends" style="width: 200px; height: 200px;">

                    <h3>How Design Shapes Our World</h3>
                    <p>A dive into the importance of design in everyday life...</p>
                    <button class="read-more" data-id="2">Read More</button>
                </div>
            </section>
        `,
        contact: `
            <section id="contact" class="contact">
                <h2>Contact</h2>
                <form id="contact-form">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
                    
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                    
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                    
                    <button type="submit">Send</button>
                </form>
            </section>
        `,
    };

    // Initial load: Home section
    mainContent.innerHTML = sections.home;

    // Navigation click event
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const section = link.getAttribute("data-section");

            // Highlight active link
            navLinks.forEach(link => link.classList.remove("active"));
            link.classList.add("active");

            // Load section content
            mainContent.innerHTML = sections[section];

            // Attach "Read More" functionality if in Posts section
            if (section === "posts") {
                attachReadMoreEvents();
            }
        });
    });

    // Function to attach "Read More" events
    function attachReadMoreEvents() {
        document.querySelectorAll(".read-more").forEach(button => {
            button.addEventListener("click", (e) => {
                e.preventDefault();
                const postId = button.getAttribute("data-id");
                const postContent = postId === "1"
                    ? `
                        <h2>Top 5 Tech Trends in 2025</h2>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5KXDNeCwRNx1V55Bc9OJ6Tndh2r509wCpaQ&s" alt="Tech Trends">
                        <p>Technology is reshaping the world in 2025. Here are the top 5 trends:</p>
                        <p>1. Artificial Intelligence: AI continues to revolutionize industries...</p>
                        <p>2. Quantum Computing: The next big leap in computing power...</p>
                        <p>3. Blockchain: Beyond cryptocurrencies, it's transforming finance...</p>
                        <p>4. Internet of Things: Smart devices connecting everything...</p>
                        <p>5. Space Exploration: Companies like SpaceX are taking humanity to the stars.</p>
                    `
                    : `
                        <h2>How Design Shapes Our World</h2>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJRBr2SXGF2D_nnmb7pD8Q1iA_8Ql9cX1zg&s" alt="Design">
                        <p>Design is all around us. From the devices we use to the clothes we wear...</p>
                        <p>Good design improves functionality, aesthetics, and user experience...</p>
                        <p>Learn how design thinking transforms businesses, products, and lives.</p>
                    `;

                mainContent.innerHTML = `<section>${postContent}<button onclick="location.reload()">Back to Posts</button></section>`;
            });
        });
    }
});
