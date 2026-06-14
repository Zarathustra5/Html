import React, { useState, useEffect } from 'react';
import { Button, Flex } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

dayjs.locale('ru');

const SlidingWeekCalendar = ({ highlightedDate }) => {
  const [visibleStartDate, setVisibleStartDate] = useState(() => {
    const baseDate = highlightedDate || dayjs();
    return baseDate.startOf('week'); // Неделя начинается с понедельника
  });

  useEffect(() => {
    if (highlightedDate) {
      setVisibleStartDate(highlightedDate.startOf('week'));
    }
  }, [highlightedDate]);

  const handlePrevDay = () =>
    setVisibleStartDate((prev) => prev.subtract(1, 'day'));
  const handleNextDay = () => setVisibleStartDate((prev) => prev.add(1, 'day'));

  const visibleDays = Array.from({ length: 7 }).map((_, index) =>
    visibleStartDate.add(index, 'day')
  );

  const monthYearLabel = visibleStartDate.format('MMMM YYYY');

  return (
    <div style={{ width: '100%' }}>
      {/* Верхний блок: стрелки и название месяца */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
        }}
      >
        <Flex style={{ visibility: 'hidden' }}>
          <Button type='text' icon={<LeftOutlined />} onClick={handlePrevDay} />
          <Button
            type='text'
            icon={<RightOutlined />}
            onClick={handleNextDay}
          />
        </Flex>
        <span
          style={{
            fontSize: '14px',
            fontWeight: '500',
            textTransform: 'capitalize',
          }}
        >
          {monthYearLabel}
        </span>
        <Flex>
          <Button type='text' icon={<LeftOutlined />} onClick={handlePrevDay} />
          <Button
            type='text'
            icon={<RightOutlined />}
            onClick={handleNextDay}
          />
        </Flex>
      </div>

      {/* Нижний блок: дни недели в сердечках */}
      <Flex justify='center'>
        {visibleDays.map((day) => {
          const isHighlighted =
            highlightedDate && day.isSame(highlightedDate, 'day');

          // Цвета в стиле Ant Design
          const redColor = '#ff4d4f'; // Красный цвет AntD
          const defaultGray = '#f0f0f0'; // Серый цвет для обычных дней

          return (
            <div
              key={day.format('YYYY-MM-DD')}
              style={{
                position: 'relative',
                width: isHighlighted ? '60px' : '40px',
                height: '60px',
                userSelect: 'none',
                cursor: 'default',
              }}
            >
              {isHighlighted && (
                <svg
                  viewBox='0 0 24 24'
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    // Заливка: белая для выделенного, серая для обычного
                    fill: 'none',
                    // Обводка: красная для выделенного, прозрачная для обычного
                    stroke: redColor,
                    strokeWidth: 1.5,
                    transition: 'all 0.3s',
                  }}
                >
                  {/* Стандартный векторный путь сердечка */}
                  <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
                </svg>
              )}
              {/* Текст поверх сердечка */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '100%',
                  // Немного сдвигаем текст вверх, т.к. низ сердечка узкий
                  paddingTop: '10px',
                  color: isHighlighted ? redColor : 'rgba(0, 0, 0, 0.85)',
                  transition: 'color 0.3s',
                }}
              >
                <span style={{ fontSize: '11px', textTransform: 'capitalize' }}>
                  {day.format('dd')}
                </span>
                <span
                  style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    lineHeight: '0.5',
                  }}
                >
                  {day.format('D')}
                </span>
              </div>
            </div>
          );
        })}
      </Flex>
    </div>
  );
};

export default SlidingWeekCalendar;
