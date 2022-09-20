// mui 5
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Skeleton from "@mui/material/Skeleton";

// styled components
import { StyledCard, StyledCardHeader } from "./styledComponents";
import { StyledCardActions, ExpandMore } from "./styledComponents";
import { StyledUserActions } from "./styledComponents";

/**
 * Show skeleton of issue card while loading 
*/

function IssueCardSkeleton() {
  return (
    <StyledCard>
      {/* header */}
      <StyledCardHeader
        avatar={
          <Skeleton
            animation="wave"
            variant="circular"
            width={80}
            height={30}
          />
        }
        title={<Skeleton animation="wave" width="80%" height={20} />}
        subheader={<Skeleton animation="wave" width="40%" height={20} />}
      />

      {/* actions */}
      <StyledCardActions disableSpacing>
        <StyledUserActions>
          <Skeleton animation="wave" width={120} height={30} />
          <Skeleton animation="wave" width={120} height={30} />
        </StyledUserActions>

        {/* expand icon */}
        <ExpandMore expand={false} aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </StyledCardActions>
    </StyledCard>
  );
}

export default IssueCardSkeleton;
