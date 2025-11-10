// Assumptions: Service to fetch Bacon Ipsum data
// [NX-42-R]

export async function getBaconText(paras = 1, type = 'meat-and-filler') {
  const url = `https://baconipsum.com/api/?type=${type}&paras=${paras}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch text');
  const data = await response.json();
  return data.join(' ');
} // Fetch bacon!!!
