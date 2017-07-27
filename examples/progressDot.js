import '../assets/index.less';
import '../assets/iconfont.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Steps, { Step } from 'rc-steps-image';

const container = document.getElementById('__react-content');

const steps = [{
	image: 'https://www.graceflowerbox.de/media/image/47/3c/71/w-01-copy591f0fe95362d_800x800.png',
}, {
	image: 'https://www.graceflowerbox.de/media/image/47/g0/c8/w_02_800x800.png',
}, {
	image: 'https://www.graceflowerbox.de/media/image/28/18/38/w_03_800x800.png',
}, {
	image: 'https://www.graceflowerbox.de/media/image/fd/01/2e/w_04_800x800.png',
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
  <Steps
  	progressDot
  	current={1}
	onClick={(index) => {console.log(index)}}
  >
    {steps}
  </Steps>
, container);
