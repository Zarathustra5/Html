import { useState } from 'react';
import { Card, Flex, Typography, Timeline, Carousel, Button } from 'antd';
import husbandPhoto from './assets/img/husband.jpg';
import wifePhoto from './assets/img/wife.jpg';
import locationPhoto from './assets/img/location.jpg';
import heartsImage from './assets/img/balloon-hearts.png';
import ringsImage from './assets/img/golden-rings.png';
import envelopesImage from './assets/img/envelopes.png';
import flowersImage from './assets/img/flowers.png';
import clocksImage from './assets/img/clocks.png';
import clocksHourArrowImage from './assets/img/clocks-hour-arrow.png';
import clocksMinuteArrowImage from './assets/img/clocks-minute-arrow.png';
import clocksArrowFixatorImage from './assets/img/clocks-arrow-fixator.png';
import dayjs from 'dayjs';
import SlidingWeekCalendar from './components/SlidingWeekCalendar';
import FeedbackForm from './components/FeedbackForm';
import CountdownTimer from './components/CountdownTimer';
import './fonts.sass';
import './App.sass';

const { Meta } = Card;
const { Title, Paragraph } = Typography;

function App() {
  const [count, setCount] = useState(0);
  const strictDate = dayjs('2026-08-08T17:00:00');

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

  const stylesCard = (info) => {
    return {
      root: {
        width: 190,
        background: '#fff3e6',
        borderRadius: 0,
        padding: 10,
      },
      body: {
        padding: 0,
        paddingTop: 20,
      },
      description: {
        padding: 0,
        fontSize: 16,
        fontWeight: 500,
        color: '#000',
      },
    };
  };
  return (
    <>
      <Flex vertical align='center'>
        <section className='block main-block' style={{ position: 'relative' }}>
          <Flex gap='50px'>
            <Card
              hoverable
              styles={stylesCard}
              id='card-wife'
              cover={<img draggable={false} alt='невеста' src={wifePhoto} />}
            >
              <Meta description='Интересно, кто будет моим мужем когда я вырасту?' />
            </Card>
            <div id='main-date' className='main-block__text'>
              <p>08</p>
              <p>08</p>
              <p>26</p>
            </div>
            <div id='main-hearts'>
              <img draggable={false} alt='сердечки' src={ringsImage} />
            </div>
          </Flex>
          <Flex justify='end' gap='50px' style={{ position: 'relative' }}>
            <Title id='main-names' className='main-block__text'>
              Татьяна <br /> и Айнур
            </Title>
            <Card
              hoverable
              styles={stylesCard}
              id='card-husband'
              cover={<img draggable={false} alt='жених' src={husbandPhoto} />}
            >
              <Meta description='Им буду я' />
            </Card>
          </Flex>
        </section>

        <section className='block'>
          <div className='block__note'>
            <Title level={2}>Дата</Title>
            <SlidingWeekCalendar highlightedDate={strictDate} />
            <Paragraph style={{ marginTop: '20px' }}>
              Ждём вас на нашей свадьбе: 8 августа
            </Paragraph>
          </div>
        </section>

        <section className='block'>
          <div className='address'>
            <Title level={2}>Адрес</Title>
            <div className='address__text'>
              <p>кафе Шампур</p>
              <p>Ул. Гафурова, д.41а</p>
            </div>
            <img className='address__img' alt='кафе' src={locationPhoto} />
          </div>
        </section>

        <section className='block program'>
          <Title level={2}>Программа</Title>
          <Flex align='center' gap='20px'>
            <div className='program-clock'>
              <div className='program-clock-wrapper'>
                <img
                  className='program-clock__clock'
                  alt='кафе'
                  src={clocksImage}
                />
                <img
                  className='program-clock__element program-clock__minute'
                  alt='кафе'
                  src={clocksMinuteArrowImage}
                  style={{ transform: `rotate(${rotateParams.minute}deg)` }}
                />
                <img
                  className='program-clock__element program-clock__hour'
                  alt='кафе'
                  src={clocksHourArrowImage}
                  style={{ transform: `rotate(${rotateParams.hour}deg)` }}
                />
                <img
                  className='program-clock__element program-clock__fixator'
                  alt='кафе'
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
        </section>

        <section className='block'>
          <div className='block__note'>
            <Title level={2}>Анкета</Title>
            <FeedbackForm />
          </div>
        </section>

        <section className='block wills'>
          <Title level={2}>Пожелания</Title>
          <Carousel draggable autoplay>
            <div>
              <div style={{ position: 'relative' }}>
                <img
                  draggable={false}
                  alt='сердечки'
                  src={envelopesImage}
                  className='wills__img'
                />
                <div className='wills__bg'></div>
                <div className='wills__text'>
                  Будем очень благодарны, если вместо подарков вы поддержите
                  наше будущее вкладом в конверт.
                </div>
              </div>
            </div>
            <div>
              <div style={{ position: 'relative' }}>
                <img
                  draggable={false}
                  alt='сердечки'
                  src={flowersImage}
                  className='wills__img'
                />
                <div className='wills__bg'></div>
                <div className='wills__text'>
                  Самое главное — ваше присутствие, хорошее настроение и желание
                  быть с нами в этот день!
                </div>
              </div>
            </div>
          </Carousel>
        </section>

        <section className='block'>
          <div className='block__note'>
            <Title level={2}>Дресс код</Title>
            <Paragraph>
              Мы рады сообщить, что дресс-кода на нашей свадьбе не будет. Тем не
              менее, мы просим воздержаться от ярких цветов и броских принтов.
            </Paragraph>
            <Paragraph>
              Будем очень рады, если вы отдадите предпочтение спокойным
              пастельным цветам.
            </Paragraph>
            <Paragraph>
              Спасибо за понимание и поддержку в создании гармоничной атмосферы
              нашего торжества!
            </Paragraph>
          </div>
        </section>

        <section className='block' style={{ paddingBottom: 20 }}>
          <Title level={2}>До начала церемонии</Title>
          <CountdownTimer targetDate={strictDate} />
        </section>
      </Flex>
    </>
  );
}

export default App;
