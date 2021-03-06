module.exports = {
  // Secure Scuttlebutt
  auth: 'async',
  address: 'sync',
  manifest: 'sync',
  get: 'async',
  createFeedStream: 'source',
  createLogStream: 'source',
  messagesByType: 'source',
  createHistoryStream: 'source',
  createUserStream: 'source',
  links: 'source',
  relatedMessages: 'async',
  add: 'async',
  publish: 'async',
  getAddress: 'sync',
  getLatest: 'async',
  latest: 'source',
  latestSequence: 'async',
  status: 'sync',
  progress: 'sync',
  whoami: 'sync',
  usage: 'sync',

  // SSB SERVER
  plugins: {
    install: 'source',
    uninstall: 'source',
    enable: 'async',
    disable: 'async',
  },
  gossip: {
    peers: 'sync',
    add: 'sync',
    remove: 'sync',
    ping: 'duplex',
    connect: 'async',
    changes: 'source',
    reconnect: 'sync',
  },
  conn: {
    remember: 'sync',
    forget: 'sync',
    dbPeers: 'source',
    connect: 'async',
    disconnect: 'async',
    peers: 'source',
    stage: 'sync',
    unstage: 'sync',
    stagedPeers: 'source',
    start: 'sync',
    stop: 'sync',
    ping: 'duplex',
  },
  replicate: {
    changes: 'source',
    upto: 'source',
  },
  invite: {
    create: 'async',
    accept: 'async',
    use: 'async',
  },
  block: {
    isBlocked: 'sync',
  },
  tunnel: {
    announce: 'sync',
    leave: 'sync',
    connect: 'duplex',
    endpoints: 'source',
    isRoom: 'async',
    ping: 'sync',
  },

  // Third-party
  blobs: {
    get: 'source',
    getSlice: 'source',
    add: 'sink',
    rm: 'async',
    ls: 'source',
    has: 'async',
    size: 'async',
    meta: 'async',
    want: 'async',
    push: 'async',
    changes: 'source',
    createWants: 'source',
  },
  backlinks: {
    read: 'source',
  },
  about: {
    socialValue: 'async',
    latestValue: 'async',
    socialValues: 'async',
    latestValues: 'async',
    socialValueStream: 'source',
    socialValuesStream: 'source',
    latestValueStream: 'source',
    read: 'source',
  },
  query: {
    read: 'source',
  },
};
