import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log('Servidor online');
  console.log(`Link http://localhost:${port}`);
});
