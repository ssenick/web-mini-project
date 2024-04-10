export const generateUniqueId = (): string => {
   // Получаем текущую дату и время в миллисекундах
   const timestamp = new Date().getTime();

   // Генерируем случайное число (для случая, если два события произойдут в одном миллисекундном интервале)
   const random = Math.floor(Math.random() * 10000);

   // Конкатенируем временную метку и случайное число для создания уникального идентификатора
   return timestamp.toString() + random.toString();
};
