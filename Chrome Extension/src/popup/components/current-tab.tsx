import * as React from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import { PasswordElement } from "../../utils/api";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import DoneIcon from "@mui/icons-material/Done";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  ListSubheader,
  OutlinedInput,
  Tooltip,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Password from "@mui/icons-material/Password";
import Link from "@mui/icons-material/Link";
import Edit from "@mui/icons-material/Edit";
import ContentCopy from "@mui/icons-material/ContentCopy";
import Delete from "@mui/icons-material/Delete";
import Lock from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Done from "@mui/icons-material/Done";

var icons = [
  { icon: <AccountCircle /> },
  { icon: <Password /> },
  { icon: <Link /> },
];

const FireNav = styled(List)<{ component?: React.ElementType }>({
  "& .MuiListItemButton-root": {
    paddingLeft: 10,
    paddingRight: 5,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

export default function CustomizedList(props) {
  const [open, setOpen] = React.useState([false]);
  const [popup, setPopup] = React.useState(false);
  const [PasswordData, setPasswordData] = React.useState(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [URL, setURL] = React.useState("");
  const [readOnlyUsername, setReadOnlyUsername] = React.useState(true);
  const [readOnlyURL, setReadOnlyURL] = React.useState(true);
  const [readOnlyPassword, setReadOnlyPassword] = React.useState(true);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangeURL = (event) => {
    setURL(event.target.value);
  };

  const handleReadOnlyUsername = () => {
    setReadOnlyUsername(!readOnlyUsername);
  };

  const handleReadOnlyURL = () => {
    setReadOnlyURL(!readOnlyURL);
  };

  const handleReadOnlyPassword = () => {
    setReadOnlyPassword(!readOnlyPassword);
  };

  function handleSaveURL(URL: string): void {
    if (URL.length > 0) {
      setURL(URL);
      setReadOnlyURL(true);
      //TODO: push the change to gabriele API
    }
  }

  function handleSaveUsername(username: string): void {
    if (username.length > 0) {
      setUsername(username);
      setReadOnlyUsername(true);
      //TODO: push the change to gabriele API
    }
  }

  function handleSavePassword(password: string): void {
    if (password.length > 0) {
      setPassword(password);
      setReadOnlyPassword(true);
      //TODO: push the change to gabriele API
    }
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  React.useEffect(() => {
    setPasswordData(props.password);
  }, [props.password]);

  const handleClickOpen = () => {
    setPopup(true);
    // console.log("popup", popup);
  };

  function handleClose(key) {
    // console.log(key)
    setPopup(false);
    // console.log("popup", popup);
  }

  const handleClick = (index: number) => {
    setOpen((prevOpen) => {
      const newOpen = [...prevOpen];
      newOpen[index] = !newOpen[index];
      return newOpen;
    });
  };

  var letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var numbers = [
    0, 1,
    // 2,
    // 3,
    // 4,
  ];

  return (
    <Box>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            primary: { main: "rgba(25, 118, 210, 0.3)" },
            background: { paper: "rgba(25, 118, 210, 0.3)" },
          },
        })}
      >
        {console.log("PasswordData", PasswordData)}
        <Paper elevation={0} sx={{ maxWidth: "100%" }}>
          <FireNav component="nav" disablePadding>
            <List
              sx={{
                width: "100%",
                height: "380px",
                maxWidth: "100%",
                position: "relative",
                overflow: "auto",
                "& ul": { padding: 0 },
              }}
              subheader={<li />}
            >
              {letters.map((sectionId) => (
                <div>
                  <li key={`section-${sectionId}`}>
                    <ListSubheader
                      sx={{ bgcolor: "rgba(10, 50, 105, 1)", color: "white" }}
                    >
                      {sectionId.toUpperCase()}
                    </ListSubheader>

                    {PasswordData?.map((item) => (
                      <div>
                        {item.hostname[0].toLowerCase() ===
                          sectionId.toLowerCase() && (
                          <ListItem key={`item-${sectionId}-${item.id}`}>
                            <Box
                              sx={{
                                bgcolor: open[item.id]
                                  ? "rgba(25, 118, 210, 0.7)"
                                  : "rgba(25, 118, 210, 0.7)",
                                width: "360px",
                              }}
                            >
                              {/* {console.log("item", item)}
                        {console.log("sectionId", sectionId)}
                        {console.log(
                          "index",
                          item + convertToIndex(sectionId) * numbers.length
                        )} */}
                              <ListItem>
                                <ListItemText
                                  primary={item.hostname}
                                  primaryTypographyProps={{
                                    noWrap: true,
                                    fontSize: 15,
                                    fontWeight: "medium",
                                    lineHeight: "20px",
                                    mb: "2px",
                                  }}
                                  // secondary="Username, Password, URL"
                                  // secondaryTypographyProps={{
                                  //   noWrap: true,
                                  //   fontSize: 12,
                                  //   lineHeight: "16px",
                                  //   color: open[item.id]
                                  //     ? "rgba(0, 0, 0, 1)"
                                  //     : "rgba(0, 0, 0, 1)",
                                  // }}
                                  sx={{ my: 0 }}
                                />
                                <IconButton
                                  aria-label="delete"
                                  onClick={handleClickOpen}
                                >
                                  <Delete />
                                </IconButton>
                                <Dialog
                                  open={popup}
                                  onClose={() =>
                                    handleClose(`item-${sectionId}-${item.id}`)
                                  }
                                  aria-labelledby="alert-dialog-title"
                                  aria-describedby="alert-dialog-description"
                                >
                                  <DialogTitle id="alert-dialog-title">
                                    {"Delete Password"}
                                  </DialogTitle>
                                  <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                      Are you sure you want to delete this
                                      password?
                                    </DialogContentText>
                                  </DialogContent>
                                  <DialogActions>
                                    {/* {console.log("item", item)}
                              {console.log("sectionId", sectionId)} */}
                                    <Button
                                      variant="contained"
                                      onClick={() =>
                                        handleClose(
                                          `item-${sectionId}-${item.id}`
                                        )
                                      }
                                      color="success"
                                    >
                                      Keep
                                    </Button>
                                    <Button
                                      variant="contained"
                                      onClick={() =>
                                        handleClose(
                                          `item-${sectionId}-${item.id}`
                                        )
                                      }
                                      autoFocus
                                      color="error"
                                    >
                                      Delete
                                    </Button>
                                  </DialogActions>
                                </Dialog>
                                <Tooltip
                                  title={open[item.id] ? "Collapse" : "Expand"}
                                >
                                  <IconButton
                                    size="small"
                                    onClick={() => handleClick(item.id)}
                                  >
                                    <KeyboardArrowDown
                                      sx={{
                                        transform: open[item.id]
                                          ? "rotate(-180deg)"
                                          : "rotate(0)",
                                        transition: "0.2s",
                                      }}
                                    />
                                  </IconButton>
                                </Tooltip>
                              </ListItem>
                              {open[item.id] && (
                                <>
                                  <ListItemButton
                                    // key={item.label}
                                    sx={{
                                      py: 0,
                                      minHeight: 32,
                                      color: "rgba(0, 0, 0, 1)",
                                    }}
                                  >
                                    <ListItemIcon sx={{ color: "inherit" }}>
                                      <AccountCircle />
                                    </ListItemIcon>
                                    <FormControl
                                      sx={{ m: 1, width: "30ch" }}
                                      variant="outlined"
                                      size="small"
                                    >
                                      <InputLabel htmlFor="outlined-adornment-username"></InputLabel>
                                      <OutlinedInput
                                        id="outlined-adornment-username"
                                        type={
                                          showPassword ? "text" : "username"
                                        }
                                        value={username}
                                        readOnly={readOnlyUsername}
                                        onChange={() =>
                                          handleChangeUsername(event)
                                        }
                                        label="Username"
                                      />
                                    </FormControl>
                                    <Tooltip title="Edit">
                                      <IconButton size="small">
                                        {readOnlyUsername ? (
                                          <Edit
                                            onClick={() => handleReadOnlyUsername()}
                                          />
                                        ) : (
                                          <Done
                                            onClick={() => handleSaveUsername(URL)}
                                          />
                                        )}
                                      </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Copy">
                                      <IconButton size="small">
                                        <ContentCopy />
                                      </IconButton>
                                    </Tooltip>
                                  </ListItemButton>

                                  {/* divider */}

                                  <ListItemButton
                                    // key={item.label}
                                    sx={{
                                      py: 0,
                                      minHeight: 32,
                                      color: "rgba(0, 0, 0, 1)",
                                    }}
                                  >
                                    <ListItemIcon sx={{ color: "inherit" }}>
                                      <Lock />
                                    </ListItemIcon>
                                    <FormControl
                                      sx={{ m: 1, width: "30ch" }}
                                      variant="outlined"
                                      size="small"
                                    >
                                      <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
                                      <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={
                                          showPassword ? "text" : "password"
                                        }
                                        value={password}
                                        readOnly={readOnlyPassword}
                                        onChange={() =>
                                          handleChangePassword(event)
                                        }
                                        endAdornment={
                                          <InputAdornment position="end">
                                            <IconButton
                                              aria-label="toggle password visibility"
                                              onClick={handleClickShowPassword}
                                              onMouseDown={
                                                handleMouseDownPassword
                                              }
                                              edge="end"
                                            >
                                              {showPassword ? (
                                                <VisibilityOff />
                                              ) : (
                                                <Visibility />
                                              )}
                                            </IconButton>
                                          </InputAdornment>
                                        }
                                        label="Password"
                                      />
                                    </FormControl>
                                    <Tooltip title="Edit">
                                      <IconButton size="small">
                                        {readOnlyPassword ? (
                                          <Edit
                                            onClick={() => handleReadOnlyPassword()}
                                          />
                                        ) : (
                                          <Done
                                            onClick={() => handleSavePassword(URL)}
                                          />
                                        )}
                                      </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Copy">
                                      <IconButton size="small">
                                        <ContentCopy />
                                      </IconButton>
                                    </Tooltip>
                                  </ListItemButton>

                                  {/* divider */}

                                  <ListItemButton
                                    // key={item.label}
                                    sx={{
                                      py: 0,
                                      minHeight: 32,
                                      color: "rgba(0, 0, 0, 1)",
                                    }}
                                  >
                                    <ListItemIcon sx={{ color: "inherit" }}>
                                      <Link />
                                    </ListItemIcon>
                                    <FormControl
                                      sx={{ m: 1, width: "30ch" }}
                                      variant="outlined"
                                      size="small"
                                    >
                                      <InputLabel htmlFor="outlined-adornment-URL"></InputLabel>
                                      <OutlinedInput
                                        id="outlined-adornment-URL"
                                        type={showPassword ? "text" : "URL"}
                                        value={URL}
                                        readOnly={readOnlyURL}
                                        onChange={() => handleChangeURL(event)}
                                        label="URL"
                                      />
                                    </FormControl>
                                    <Tooltip title="Edit">
                                      <IconButton size="small">
                                        {readOnlyURL ? (
                                          <Edit
                                            onClick={() => handleReadOnlyURL()}
                                          />
                                        ) : (
                                          <Done
                                            onClick={() => handleSaveURL(URL)}
                                          />
                                        )}
                                      </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Copy">
                                      <IconButton size="small">
                                        <ContentCopy />
                                      </IconButton>
                                    </Tooltip>
                                  </ListItemButton>
                                </>
                              )}
                            </Box>
                          </ListItem>
                        )}
                      </div>
                    ))}
                  </li>
                </div>
              ))}
            </List>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}
