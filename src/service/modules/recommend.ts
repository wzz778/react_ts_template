import hyRequest from '..'

export function getTopBanner() {
  return hyRequest.get({
    url: '/banner'
  })
}

export function getHotRecommend() {
  return hyRequest.get({
    url: '/personalized'
  })
}

export function getNewAlbum(offset = 0, limit = 10) {
  return hyRequest.get({
    url: '/album/new',
    params: {
      offset,
      limit
    }
  })
}

export function getPlayListDetail(id: number) {
  return hyRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
