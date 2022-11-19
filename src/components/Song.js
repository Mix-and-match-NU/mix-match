//! CALL SONG DATA HERE

function Song({ data }) {

  const { _id, title, artist, album, year } = data

  console.log("SONG.JS DATA", title, artist)


  return (
    <>
    <div key={_id}>
      <p>{title}</p>
      <p>{artist}</p>
      <p>{album}</p>
      <p>{year}</p>
    </div>
    </>
  );
}

export default Song;
