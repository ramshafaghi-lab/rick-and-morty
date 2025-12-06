interface Props {
  img: string;
  name: string;
  status: string;
  species: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
}

function CharacterCard({
  img,
  name,
  status,
  species,
  origin,
  location,
}: Props) {
  return (
    <div>
      <div className="charcter-card">
        <div className="charcter-card-left">
          <img src={img} alt="character"  />
        </div>
        <div className="charcter-card-right">
          <div className="charcter-card-content-wrapper">
            <section className="sec1">
              <a href="https://rickandmortyapi.com/">
                <h2>{name}</h2>
              </a>
              <span className="status">
                <span className="status-icon">
                  {status === "Alive" && (
                    <img
                      className="alive"
                      src="./icons/circle-alive.png"
                      alt="alive"
                    />
                  )}
                  {status === "Dead" && (
                    <img
                      className="dead"
                      src="./icons/circle-dead.png"
                      alt="dead"
                    />
                  )}
                  {status === "unknown" && (
                    <img
                      className="unknown"
                      src="./icons/circle-unknown.png"
                      alt="unknown"
                    />
                  )}
                </span>
                <p>
                  {status} - {species}
                </p>
              </span>
            </section>
            <section className="sec2">
              <span className="text-gray">Last known location :</span>
              <a
                href="http://rickandmortyapi.com/api/location/20"
                target="_blank"
                rel="noopener "
              >
                {location.name}
              </a>
            </section>
            <section className="sec3">
              <span className="text-gray">First seen in :</span>
              <a
                href="http://rickandmortyapi.com/api/episode8"
                target="_blank"
                rel="noopener "
              >
                {origin.name}
              </a>
            </section>
          </div>
        </div>
      </div>
      {/* <div className="clear-fix"></div> */}
    </div>
  );
}

export default CharacterCard;
