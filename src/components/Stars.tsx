/** @jsxImportSource @emotion/react */

/* Interfaces */
import StarsProps from '../interfaces/StarsProps';

function Stars(props: StarsProps) {

  return (
    <div className="stars-outer">
      <div
        className="stars-inner"
        css={{width: `${props.starsRating * 20}%`}}
      >
      </div>
    </div>
  );
}

export default Stars;
