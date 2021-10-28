const Button = {

  // All buttons
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "base",
  },

  // One of these will be passed to Button, or default is used
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4,
      py: 3,
    },
    md: {
      fontSize: "md",
      px: 6,
      py: 4,
    },
  },

  // One of these will be passed to Button, or default is used
  variants: {
    outline: {
      border: "2px solid",
      borderColor: "purple.500",
      color: "purple.500",
    },
    solid: {
      bg: "purple.500",
      color: "white",
    },
  },

  // These are passed to component as default
  defaultProps: {
    size: "md",
    variant: "outline",
  },
}

export default Button