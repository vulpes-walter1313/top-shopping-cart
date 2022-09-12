import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <header
        className={styles.hero}
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
      <section className={styles.treesSec}>
        <h2>Featured Trees</h2>
        <div className={styles.treesContainer}>
          <div className={styles.treeCard}>
            <div>
              <img src="https://picsum.photos/200" alt="random pic"></img>
              <p className={styles.treeCardName}>Aspen</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <Link className="btn-one" to="/shop">
              Buy Now
            </Link>
          </div>
          <div className={styles.treeCard}>
            <div>
              <img src="https://picsum.photos/200" alt="random pic"></img>
              <p className={styles.treeCardName}>Live Oak</p>
              <p>Odio tempor orci dapibus ultrices in iaculis nunc sed augue. </p>
            </div>
            <Link className="btn-one" to="/shop">
              Buy Now
            </Link>
          </div>
          <div className={styles.treeCard}>
            <div>
              <img src="https://picsum.photos/200" alt="random pic"></img>
              <p className={styles.treeCardName}>Mexican Ash</p>
              <p>
                Mi ipsum faucibus vitae aliquet. Nunc mattis enim ut tellus
                elementum.
              </p>
            </div>
            <Link className="btn-one" to="/shop">
              Buy Now
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.testimonialSec}>
        <div className={styles.testimonialImage}>
          <img src="/images/grumpy-guy.jpg" alt="grumpy guy"></img>
        </div>
        <div className={styles.testimonialQuoteContainer}>
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
      <section className={styles.homeMissionSec}>
        <div className={styles.homeMissionContent}>
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
