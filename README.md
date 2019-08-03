# react-desktop-notify

It is a tool used to fire callback whenever an element comes in a specific part of the viewPort.

## Installation

```bash
npm i react-scroll-observer
```

```bash
yarn add react-scroll-observer
```

## Usage

```python
import React from "react";
import Observer from "react-scroll-observer";

 class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    //  creating ref to observe this elements
    this.box1Ref = React.createRef();
    this.box2Ref = React.createRef();
    this.box3Ref = React.createRef();
    this.box4Ref = React.createRef();
  }

  componentDidMount() {
    const o = new Observer();


    //  setting observer to first Box
    o.observeElement(this.box1Ref.current) // passing the ref to set the observer
     .setCallback(this.onBox1View) //  callback to be executed on every time the element comes in or out of viewPort
     .watch(); //  start the observer

    //  setting observer to second Box
    o .observeElement(this.box2Ref.current)
      .setCallback(this.onBox2View)
      .watch();

    //  setting observer to third Box
    o .observeElement(this.box3Ref.current)
      .setCallback(this.onBox3View)
      .watch();


    //  setting observer to fourth Box
    o .observeElement(this.box4Ref.current)
      .setCallback(this.onBox4View)
      .setThreshold(0.5) // set the threshold value upto which position the element comes in or out to execute the callback
      .watch();
  }

  componentWillUnmount (){
    //  remove all the watchers added to this current instance of Observer
    o.removeWatcher();
  }

 // callback is executed which recieves two values {isVisible, intersectionRatio}
  onBox1View = e => {
    console.log("Box 1====", e);
  };

  onBox2View = e => {
    console.log("Box 2====", e);
  };

  onBox3View = e => {
    console.log("Box 3====", e);
  };

  onBox4View = e => {
    console.log("Box 4====", e);
  };




  render() {
    return (
      <div className="App">
        <div ref={this.box1Ref} className="box">
          <span>Item 0</span>
        </div>

        <div ref={this.box2Ref} className="box1">
          <span>Item 1</span>
        </div>

        <div ref={this.box3Ref} className="box2">
          <span>Item 2</span>
        </div>

        <div ref={this.box4Ref} className="box3">
          <span>Item 3</span>
        </div>

        <div className="box3">
          <span>Item 4</span>
        </div>

        <div className="box3">
          <span>Item 5</span>
        </div>

        <div className="box3">
          <span>Item 6</span>
        </div>

      </div>
    );
  }
}

```

## API

```python

observeElement(element @required){
  //  element on which the observer is to be set
}

```

```python

setCallback(function @required){
  // function is called whenever the element goes in or out of the specific viewPort
  // function recieves an object
  {
    isVisible: boolean // specifies whether the element is currently at specific position according to threshols value
    intersectionRatio: Number //
  }
}

```

```python

setThreshold(Value @required){
  /*
  Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to run every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1]. The default is 0 (meaning as soon as even one pixel is visible, the callback will be run). A value of 1.0 means that the threshold isn't considered passed until every pixel is visible.
  */
}

```

```python

setRootElement(element @required){

/*
The element that is used as the viewport for checking visiblity of the target. Must be the ancestor of the target. Defaults to the browser viewport if not specified or if null.
*/
}

```

```python

setOffset(value @required){

 /*
 Margin around the root. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left). The values can be percentages. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. Defaults to all zeros.
 */

}

```

```python

watch(){
  // Starts the Observer to on the specific element

}

```

```python

removeWatcher(){
  // Remove all the observers added to the current instance of Observer

}

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[ISC](https://choosealicense.com/licenses/mit/)
