export default function globalStyles(theme) {
  return ({
    root: {
      width: "100%",
      maxWidth: 360,
      background: theme.palette.background.paper
    },
    suggestionsContainerOpen: {
      position: "absolute",
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit * 3,
      left: 0,
      right: 0
    },
    suggestion: {
      display: "block"
    },
    suggestionsList: {
      margin: 0,
      padding: 0,
      listStyleType: "none"
    },
    textField: {
      width: "100%"
    }
  })
}
