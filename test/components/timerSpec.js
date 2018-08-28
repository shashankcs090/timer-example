import {expect} from 'chai';
import React from 'react/addons';
import TimerConsole from '../../src/components/TimerConsole';
import TimerControl from '../../src/components/TimerControl';
import {Timer} from '../../src/components/Timer';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate}
    =  React.addons.TestUtils;

describe("Timer", () => {
  describe("TimerConsole", () => {
    it("displays the counter value", () => {

      const component = renderIntoDocument(
          <TimerConsole count={10} />
      );

      const h1 = scryRenderedDOMComponentsWithTag(component, 'h1');

      expect(h1.length).to.equal(1);
      expect(h1[0].textContent).to.equal('10');
    });
  })

  describe("TimerControl", () => {
    it("displays 4 buttons namely: start, stop, resume, restart", () => {

      const component = renderIntoDocument(
        <TimerControl/>
      );

      const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
      expect(buttons.length).to.equal(4);
      expect(buttons[0].textContent).to.equal('START');
      expect(buttons[1].textContent).to.equal('STOP');
      expect(buttons[2].textContent).to.equal('RESUME');
      expect(buttons[3].textContent).to.equal('RESTART');
    });

    function clickButton(buttons, index, name) {
      expect(buttons[index].textContent).to.equal(name);
      Simulate.click(buttons[index]);
    }

    it("buttons on click invokes their respective callbacks", () => {
      let invoked = false;
      const component = renderIntoDocument(
        <TimerControl
          start={() => invoked = true}
          stop={() => invoked = true}
          resume={() => invoked = true}
          restart={() => invoked = true}
          />
      );

      const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
      clickButton(buttons, 0, 'START', invoked);
      expect(invoked).to.equal(true);

      invoked = false;
      clickButton(buttons, 1, 'STOP', invoked);
      expect(invoked).to.equal(true);

      invoked = false;
      clickButton(buttons, 2, 'RESUME', invoked);
      expect(invoked).to.equal(true);

      invoked = false;
      clickButton(buttons, 3, 'RESTART', invoked);
      expect(invoked).to.equal(true);
    });
  });

  it("Contains TimerConsole and TimerControl child components", () => {
    const component = renderIntoDocument(
      <Timer/>
    );

    const tControl = scryRenderedDOMComponentsWithTag(component, 'button');
    const tConsole = scryRenderedDOMComponentsWithTag(component, 'h1');
    expect(tControl.length).to.equal(4);
    expect(tConsole.length).to.equal(1);
  });

});
