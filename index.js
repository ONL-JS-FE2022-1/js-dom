// async await

const url = 'https://randomuser.me/api/';

async function loadData(url) {
  const p = fetch(url);
  const res = await p;
  return res;
}