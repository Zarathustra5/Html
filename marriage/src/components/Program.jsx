import { useState } from 'react';
import { Flex, Button } from 'antd';
import clocksImage from '../assets/img/clocks.png';
import clocksHourArrowImage from '../assets/img/clocks-hour-arrow.png';
import clocksMinuteArrowImage from '../assets/img/clocks-minute-arrow.png';
import clocksArrowFixatorImage from '../assets/img/clocks-arrow-fixator.png';

const Program = () => {
  const [schedule, setSchedule] = useState([
    {
      id: 0,
      title: '16:30',
      content: 'Сбор гостей',
      rotateParams: { hour: 135, minute: 180 },
      isActive: true,
    },
    {
      id: 1,
      title: '17:00',
      content: 'Церемония',
      rotateParams: { hour: 150, minute: 0 },
      isActive: false,
    },
    {
      id: 2,
      title: '17:30',
      content: 'Начало банкета',
      rotateParams: { hour: 165, minute: 180 },
      isActive: false,
    },
    {
      id: 3,
      title: '00:00',
      content: 'Завершение',
      rotateParams: { hour: 0, minute: 0 },
      isActive: false,
    },
  ]);

  const [rotateParams, setRotateParams] = useState({
    hour: 135,
    minute: 180,
  });

  const handleClocksToggle = (index, itemRotateParams) => {
    setRotateParams(itemRotateParams);
    setSchedule((prevItems) =>
      prevItems.map((item, i) => {
        if (item.isActive) return { ...item, isActive: false };
        if (i === index) return { ...item, isActive: true };
        return item;
      })
    );
  };

  return (
    <Flex justify='center' align='center' gap='10px'>
      <div className='program-clock'>
        <div className='program-clock-wrapper'>
          <img className='program-clock__clock' alt='часы' src={clocksImage} />
          <img
            className='program-clock__element program-clock__minute'
            alt='минутная стрелка'
            src={clocksMinuteArrowImage}
            style={{ transform: `rotate(${rotateParams.minute}deg)` }}
          />
          <img
            className='program-clock__element program-clock__hour'
            alt='часовая стрелка'
            src={clocksHourArrowImage}
            style={{ transform: `rotate(${rotateParams.hour}deg)` }}
          />
          <img
            className='program-clock__element program-clock__fixator'
            alt='фиксатор стрелок'
            src={clocksArrowFixatorImage}
          />
        </div>
      </div>
      <Flex className='program-schedule' vertical gap='5px'>
        {schedule.map((item) => (
          <Button
            color='primary'
            variant={item.isActive ? 'solid' : 'outlined'}
            style={{
              width: '100%',
              textAlign: 'left',
              justifyContent: 'start',
            }}
            onClick={() => handleClocksToggle(item.id, item.rotateParams)}
          >
            <p>{item.title}</p>
            <p>{item.content}</p>
          </Button>
        ))}
      </Flex>
    </Flex>
  );
};

export default Program;
