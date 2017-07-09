import 'rc-steps/assets/index.less';
import 'rc-steps/assets/iconfont.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Steps, { Step } from 'rc-steps';

const container = document.getElementById('__react-content');

const steps = [{
  title: 'Type',
}, {
  title: 'Size',
}, {
  title: 'Flowers',
}, {
  title: 'Pay',
}, {
  title: 'Ship',
}, {
  title: 'Enjoy',
}].map((s, i) => {
  return (
    <Step
      key={i}
      status={s.status}
      title={s.title}
	  image={s.image}
    />
  );
});

ReactDOM.render(
  <Steps progressDot current={1}>
    {steps}
  </Steps>
, container);
