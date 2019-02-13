import React, { Component, Fragment } from "react";
import Drawer from "react-drag-drawer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialHeight: 200,
      lastHeight: 40
    };
  }
  handleDrag = e => {
    const { newPosition } = e;
    const { initialHeight } = this.state;
    //if (initialHeight > 30) {
    this.setState({ initialHeight: newPosition });
    // }
  };
  render() {
    const { initialHeight } = this.state;
    const getNode = document.querySelector(".css-3pxmmn");
    const height = getNode
      ? (getNode.style.height = `${initialHeight}px`)
      : "200px";
    console.log(initialHeight);
    return (
      <Fragment>
        <Drawer
          open={true}
          onRequestClose={() => {}}
          onDrag={this.handleDrag}
          onOpen={() => {}}
          // notifyWillClose={willIClose => console.log({ willIClose })}
          allowClose={true}
          modalElementClass="card"
          containerElementClass="my-shade"
          parentElement={document.body} // element to be appended to
          direction="top"
          // inViewportChange={atTopOfViewport => console.log({ atTopOfViewport })}
          // getModalRef={ref => console.log({ ref })}
          // getContainerRef={ref => console.log({ ref })}
        >
          <div>Hey Im inside a drawer!</div>
        </Drawer>
      </Fragment>
    );
  } 
}

export default App;
