function alphanumeric(string)
{
  return /^[\w+][^\s\!@#$%^&*()_-]*$/.test(string);
}

module.exports = alphanumeric;