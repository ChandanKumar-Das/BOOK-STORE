import React from 'react';

const About = () => {
  return (
    <div className="bookstore max-w-2xl mx-auto">
      <header className="welcome-message">
        <h1 className='font-bold py-4'>Welcome</h1>
        <p>
          A haven for book lovers and curious minds alike. Our shelves are filled with stories waiting to be discovered,
          adventures to embark on, and knowledge to be gained. Step inside and let your imagination wander.
        </p>
      </header>

      <section className="about-us">
        <h2 className='font-bold py-4'>About Us</h2>
        <article className="our-story">
          <h3 className='font-bold py-2'>Our Story</h3>
          <p>
            At [Your Bookstore Name], our journey began with a simple love for books. Founded in [Year], our store has become a cornerstone of the community, a place where readers of all ages come together to celebrate the magic of reading. Our founders, [Founder Names], envisioned a space where people could connect over their shared passion for literature, and that vision continues to guide us today.
          </p>
        </article>
        <article className="our-mission">
          <h3 className='font-bold py-4'>Our Mission</h3>
          <p>
            Our mission is to ignite a love for reading in every visitor who walks through our doors. We believe in the transformative power of books and are committed to providing a diverse selection that caters to all tastes and interests. From the latest bestsellers to hidden gems, we strive to offer something for everyone.
          </p>
        </article>
        <article className="our-community">
          <h3 className='font-bold py-4'>Our Community</h3>
          <p>
            We are more than just a bookstore; we are a community hub. We host a variety of events, including author signings, book clubs, and children's story hours. Our goal is to create a space where people can come together to share ideas, discuss books, and make lasting connections.
          </p>
        </article>
      </section>

      <section className="book-recommendations">
        <h2 className='font-bold py-4'>Book Recommendations</h2>
        <article className="staff-picks">
          <h3>Staff Picks</h3>
          <p>
            Our knowledgeable staff is passionate about books and eager to share their recommendations. Look for our 'Staff Picks' section to discover some of our favorite reads.
          </p>
        </article>
        <article className="bestsellers">
          <h3>Bestsellers</h3>
          <p>
            Stay up-to-date with the latest literary trends by checking out our bestsellers list. From gripping thrillers to heartwarming romances, these are the books that everyone is talking about.
          </p>
        </article>
        <article className="hidden-gems">
          <h3>Hidden Gems</h3>
          <p>
            Discover the unsung heroes of the literary world in our 'Hidden Gems' section. These books may not be on the bestseller lists, but they are treasures waiting to be uncovered.
          </p>
        </article>
      </section>

      <section className="events-and-activities">
        <h2>Events and Activities</h2>
        <article className="author-events">
          <h3>Author Events</h3>
          <p>
            Meet your favorite authors at our in-store events. Get your books signed and hear the stories behind the stories from the authors themselves.
          </p>
        </article>
        <article className="book-clubs">
          <h3>Book Clubs</h3>
          <p>
            Join one of our book clubs to dive deep into discussions about your favorite genres. Whether you're into mystery, sci-fi, or contemporary fiction, we have a group for you.
          </p>
        </article>
        <article className="children-activities">
          <h3>Children's Activities</h3>
          <p>
            Foster a love for reading early with our children's activities. From story hours to creative workshops, we have something to spark every young imagination.
          </p>
        </article>
      </section>

      <section className="services">
        <h2>Services</h2>
        <article className="special-orders">
          <h3>Special Orders</h3>
          <p>
            Looking for a specific title? Let us help! We offer special order services to ensure you get the book you need, even if it's not on our shelves.
          </p>
        </article>
        <article className="gift-cards">
          <h3>Gift Cards</h3>
          <p>
            Not sure what to get for the book lover in your life? Our gift cards make the perfect present for any occasion.
          </p>
        </article>
        <article className="loyalty-program">
          <h3>Loyalty Program</h3>
          <p>
            Join our loyalty program and earn rewards with every purchase. Get exclusive discounts, early access to sales, and more as a thank-you for being a valued customer.
          </p>
        </article>
      </section>

      <section className="blog">
        <h2>Blog</h2>
        <p>
          Our blog features book reviews, author interviews, and reading tips. It's a great resource for staying informed about the literary world and finding your next great read.
        </p>
      </section>

      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>
          We'd love to hear from you! Whether you have a question, suggestion, or just want to share your love for books, feel free to reach out to us. Visit us at [Store Address], call us at [Phone Number], or email us at [Email Address].
        </p>
      </section>

      <section className="social-media">
        <h2>Social Media</h2>
        <p>
          Follow us on social media for the latest updates, event announcements, and bookish fun. Connect with us on [Facebook, Instagram, Twitter, etc.].
        </p>
      </section>
    </div>
  );
};

export default About;
