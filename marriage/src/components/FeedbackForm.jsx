import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';

const FeedbackForm = () => {
  return (
    <>
      <Form layout='vertical'>
        <Form.Item name='name' label='Ваши имя и фамилия' required>
          <Input />
        </Form.Item>
        <Form.Item name='visit' label='Сможете присутствовать?'>
          <Radio.Group>
            <Radio value={true}>Да</Radio>
            <Radio value={false}>Нет</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name='drinks' label='Какие напитки предпочитаете?'>
          <Input />
        </Form.Item>
        <Form.Item name='allergy' label='Есть ли аллергии?'>
          <Input />
        </Form.Item>
        <Form.Item label={null}>
          <Button type='primary' htmlType='submit'>
            Отправить
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default FeedbackForm;
