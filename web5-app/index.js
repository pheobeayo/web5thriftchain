import { Web5 } from '@web5/api';


const { web5, did: aliceDid } = await Web5.connect();

console.log(aliceDid);

const { record } = await web5.dwn.records.create({
    data: 'Hello, This is Thriftchain!',
    message: {
      dataFormat: 'text/plain',
    },
  });

  console.log('writeResult', record);