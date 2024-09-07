import { styled } from "@mui/material";
import LinearProgress from "@mui/material";

const LoaderWrapper = styled("div")(({ theme }) => ({
  position: "fixed",
  zIndex: 2001,
  "& > * + *": theme.spaced(2),
}));

const Loader = () => {
  <LoaderWrapper>
    <LinearProgress />
  </LoaderWrapper>;
};

export default Loader;
