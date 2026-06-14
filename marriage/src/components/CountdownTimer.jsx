import { useState, useEffect } from 'react';
import { Flex, Typography, Card } from 'antd';

const { Meta } = Card;
const targetDate = new Date('2026-08-08T17:00:00');

const CountdownTimer = (marriageDate) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [descriptions, setDescriptions] = useState({
    daysDesc: 'дней',
    hoursDesc: 'часов',
    minutesDesc: 'минут',
    secondsDesc: 'секунд',
  });

  function getWordForm(number) {
    const exceptions = [11, 12, 13, 14];
    const secondForm = [2, 3, 4];
    if (!exceptions.includes(number)) {
      if (number % 10 == 1) {
        return 1;
      } else if (secondForm.includes(number % 10)) {
        return 2;
      }
    }
    return 0;
  }

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      let wordForm = getWordForm(days);
      const daysDesc = wordForm == 1 ? 'день' : wordForm == 2 ? 'дня' : 'дней';

      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      wordForm = getWordForm(hours);
      const hoursDesc =
        wordForm == 1 ? 'час' : wordForm == 2 ? 'часа' : 'часов';

      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      wordForm = getWordForm(minutes);
      const minutesDesc =
        wordForm == 1 ? 'минута' : wordForm == 2 ? 'минуты' : 'минут';

      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      wordForm = getWordForm(seconds);
      const secondsDesc =
        wordForm == 1 ? 'секунда' : wordForm == 2 ? 'секунды' : 'секунд';

      setTimeLeft({ days, hours, minutes, seconds });
      setDescriptions({ daysDesc, hoursDesc, minutesDesc, secondsDesc });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <Flex vertical align='center'>
      <div style={{ width: '100%' }}>
        <Card hoverable style={{ background: '#fff3e6' }}>
          <Meta
            title={String(timeLeft.days).padStart(2, '0')}
            description={descriptions.daysDesc}
          />
        </Card>
        <Flex justify='center' gap='5px' style={{ marginTop: 5 }}>
          <Card hoverable style={{ background: '#fff3e6', flex: '0 0 33%' }}>
            <Meta
              title={String(timeLeft.hours).padStart(2, '0')}
              description={descriptions.hoursDesc}
            />
          </Card>
          <Card hoverable style={{ background: '#fff3e6', flex: '0 0 33%' }}>
            <Meta
              title={String(timeLeft.minutes).padStart(2, '0')}
              description={descriptions.minutesDesc}
            />
          </Card>
          <Card hoverable style={{ background: '#fff3e6', flex: '0 0 33%' }}>
            <Meta
              title={String(timeLeft.seconds).padStart(2, '0')}
              description={descriptions.secondsDesc}
            />
          </Card>
        </Flex>
      </div>
    </Flex>
  );
};

export default CountdownTimer;
