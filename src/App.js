import React from "react";
import classnames from "classnames";
import styles from "./App.scss";

const moduleName = "App";
const cx = classnames.bind(styles);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const el = document.querySelector("nav");
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener("scroll", this.handleScroll);
    document.body.style.margin = 0;
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top
      ? (document.body.style.paddingTop = `${this.state.height}px`)
      : (document.body.style.paddingTop = 0);
  }
  handleScroll = () => {
    this.setState({ scroll: window.scrollY });
  };
  render() {
    console.log(this.state.scroll, this.state.top, this.state.height);
    return (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-text`)}>
          This is a project to create a sticky header.
        </div>
        <nav
          className={cx(`${moduleName}-header`, {
            [`${moduleName}-header--sticky`]: this.state.scroll > this.state.top
          })}
        >
          <ul className={cx(`${moduleName}-header-ul`)}>
            <li className={cx(`${moduleName}-header-li`)}>Home</li>
            <li className={cx(`${moduleName}-header-li`)}>About</li>
            <li className={cx(`${moduleName}-header-li`)}>Careers</li>
            <li className={cx(`${moduleName}-header-li`)}>Contact</li>
            <li className={cx(`${moduleName}-header-li`)}>Help</li>
          </ul>
        </nav>
        <div className={cx(`${moduleName}-content`)}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          aliquam itaque, ab optio, omnis cupiditate ut accusamus alias, quae
          vitae ducimus animi autem aperiam qui in asperiores dolorum? Adipisci,
          sit! Dolorem nesciunt enim odit, voluptate maxime corporis, odio
          assumenda provident neque dolor atque minima ad! At rem laborum ullam
          deserunt in est veniam asperiores corrupti, ea optio, magni fugiat
          nulla. Qui, quo sunt fuga autem beatae animi error nemo commodi ipsam
          dolore, mollitia dolorem atque, quas nesciunt? At, nam quaerat
          accusantium adipisci explicabo nulla a quidem quas ea fugiat esse?
          Quam aut, excepturi eveniet illum facere officia doloremque et ullam
          iusto. Iure cum sapiente, culpa nobis nemo accusamus tempora
          voluptatibus, id odit impedit officia itaque totam. Deserunt nemo
          voluptates nihil! Minus quaerat, blanditiis impedit quam fugiat
          nostrum maxime quisquam. Laboriosam nostrum accusantium saepe
          exercitationem, temporibus blanditiis facere non iusto enim
          repellendus suscipit corporis eveniet commodi maxime nihil tenetur
          itaque voluptatibus. Veniam quos error mollitia molestias esse
          sapiente cumque fugiat id obcaecati ex repellat optio eaque commodi
          nam nesciunt beatae tempore, autem illum aspernatur vero et numquam.
          Laborum animi similique quos. Eveniet quasi est voluptates minima,
          ipsum possimus consectetur. Quo, vel. Qui, beatae unde at amet illo
          tempore molestias saepe quidem quo voluptatum. Ea amet cum doloremque
          eos iste accusamus sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatem rem vel explicabo consequatur
          perspiciatis accusamus esse, eligendi, alias eum ad veniam, fuga
          minima nisi expedita eius! Officia vel ullam laudantium? Dolore
          temporibus quidem velit, soluta eligendi voluptatibus, adipisci labore
          id non reiciendis libero alias in a omnis asperiores recusandae atque
          cum nisi repellendus error itaque? Numquam molestias ab labore
          aliquid. Aliquid sequi rem quasi facere alias quae, optio soluta
          adipisci illum dolore vitae? Ipsum, provident iure aliquid ut
          aspernatur, non, sint necessitatibus itaque veniam voluptas eos
          temporibus asperiores voluptatum vero. Porro laudantium fugit aperiam
          hic explicabo cupiditate dicta dolorum, corrupti ipsam sed labore
          adipisci maiores voluptates tenetur. Explicabo, voluptates. Rerum
          alias quis facere quia saepe aperiam molestiae iusto ea modi. Dolore
          possimus ipsa, praesentium iusto, esse sed, qui reprehenderit incidunt
          sequi eveniet cum. Aspernatur architecto doloremque eius quaerat alias
          debitis blanditiis harum, nesciunt modi quae maiores quo dolorum
          numquam omnis. Reiciendis corporis quo doloribus tempora enim
          exercitationem possimus iure alias qui illo, totam culpa voluptas
          laudantium beatae. Voluptatibus, saepe? Perferendis possimus explicabo
          id et assumenda aut consequuntur animi officiis facilis? Error,
          eligendi molestiae quaerat dolorum quidem vitae nulla maiores adipisci
          corrupti laudantium eos magni, nesciunt, accusantium iste dolore vero
          libero fugiat perspiciatis. Odio voluptate asperiores repellat maiores
          nemo accusamus esse.
        </div>
      </div>
    );
  }
}

export default App;
