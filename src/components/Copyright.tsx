import { Link, Typography } from "@mui/material";

const Copyright = (props: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      style={{
        position: "absolute",
        bottom: 20,
        right: 0,
        left: 0,
      }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Server Management System
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
