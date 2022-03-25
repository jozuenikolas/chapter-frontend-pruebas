// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

export const fetchPeople = async () => {
  try {
      let url = `http://swapi.dev/api/people`;
      const resp = await fetch( url );
      const data = await resp.json();
      return data;
  } catch (error) {

  }
}
