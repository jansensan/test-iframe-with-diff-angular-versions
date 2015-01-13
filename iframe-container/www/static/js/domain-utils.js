function setDomain() {
  var domainParts = window.location.hostname.split('.'),
    topLevelDomain = domainParts[domainParts.length - 1],
    secondLevelDomain = domainParts[domainParts.length - 2];

  if(secondLevelDomain !== undefined && topLevelDomain !== undefined) {
    document.domain = domainParts[domainParts.length - 2] + '.' + domainParts[domainParts.length - 1];
    console.log('document.domain (container): ' + (document.domain));

  } else {
    console.warn('Could not set document.domain, one of the domain\'s parts may be undefined.');
  }

}

setDomain();