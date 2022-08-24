import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      <header
        className="hero-home"
        style={{ backgroundImage: "url('./images/tree.jpg')" }}
      >
        <h1>
          Fast growing trees.
          <br />
          Shipped in 24 hours.
        </h1>
        <Link className="btn-one" to="/shop">
          Shop Trees
        </Link>
      </header>
      <section className="featured-trees-sec">
        <h2>Featured Trees</h2>
        <div className="featured-trees-container">
          <div className="tree-card">
            <img src="https://picsum.photos/200" alt="random pic"></img>
            <p className="tree-card-name">Aspen</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <Link className="btn-one" to="/shop">
              Buy Now
            </Link>
          </div>
          <div className="tree-card">
            <img src="https://picsum.photos/200" alt="random pic"></img>
            <p className="tree-card-name">Live Oak</p>
            <p>Odio tempor orci dapibus ultrices in iaculis nunc sed augue. </p>
            <Link className="btn-one" to="/shop">
              Buy Now
            </Link>
          </div>
          <div className="tree-card">
            <img src="https://picsum.photos/200" alt="random pic"></img>
            <p className="tree-card-name">Mexican Ash</p>
            <p>
              Mi ipsum faucibus vitae aliquet. Nunc mattis enim ut tellus
              elementum.
            </p>
            <Link className="btn-one" to="/shop">
              Buy Now
            </Link>
          </div>
        </div>
      </section>
      <section className="testimonial-sec">
        <div className="testimonial-image">
          <img src="/images/grumpy-guy.jpg" alt="grumpy guy"></img>
        </div>
        <div className="testimonial-quote-container">
          <figure>
            <blockquote>
              <p>
                Tree Shoppe knows what i want. Fast growing trees sent to me in
                24 hours. Wont buy from anyhere else now!
              </p>
            </blockquote>
            <figcaption>Ronan Smithereen</figcaption>
          </figure>
        </div>
      </section>
      <section className="home-mission-sec">
        <div className="home-mission-content">
          <h2>The Mission</h2>
          <p>
            Our mission is to spread a wave of reforestation and aforestation to
            make up for all the trees humanity has unjustifiably chopped down.
          </p>
        </div>
      </section>
    </>
  );
}
