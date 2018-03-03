block('header').js()( true )

block('header').content()(function() {
  return [
    {
      elem: 'back-block',
      content: [
      {
        block: 'button',
        mods: {
          mobile: true,
          type: 'link'
        },
        url: '/?bottom=show#bottom',
        icon: {
          block: 'icon',
          mods: {
            symbol: 'back'
          }
        }
      },
      {
        block: 'link',
        mix: { block: 'header', elem: 'title' },
        url: '/?bottom=show#bottom',
        content: {
          block: 'image',
          content: { html: '<svg viewBox="0 0 82 24" xmlns="http://www.w3.org/2000/svg"><g fill="#D9D9D9" fill-rule="evenodd"><path d="M11.8694982 23.441c-3.01466665 0-5.66019046-1.0459048-7.99809522-3.0761905C1.59502203 18.273.42606965 15.381381.42606965 11.6899524c0-3.50685716 1.16895238-6.3369524 3.50685714-8.36723811C6.33235536 1.23090476 8.97787917.185 11.931022.185c4.3066667 0 7.9980953 2.15333333 11.0742857 6.46 2.276381-3.50685714 6.2139048-6.46 11.1358096-6.46 3.2607619 0 5.9678095 1.10742857 8.1211428 3.32228571 2.1533334 2.21485715 3.2607619 4.92190477 3.2607619 8.18266669 0 3.4453333-1.1074285 6.2754286-3.2607619 8.4902857C40.1089268 22.3335714 37.4018792 23.441 34.1411173 23.441c-4.1836191 0-8.3057143-2.3994286-11.1973334-6.3984762C19.8060696 21.2876667 16.1146411 23.441 11.8694982 23.441zm.7382857-6.2139048c2.5224762 0 4.860381-1.8457142 7.0137143-5.475619-2.3994286-3.62990477-4.7373333-5.41409525-7.0752381-5.41409525-3.13771426 0-5.22952379 2.584-5.22952379 5.35257145 0 2.891619 2.09180953 5.5371428 5.29104759 5.5371428zm20.8565715 0c3.1992381 0 5.168-2.584 5.168-5.5371428 0-2.89161907-1.9072381-5.29104764-5.2910477-5.29104764-2.5224761 0-4.8603809 1.78419048-7.0137142 5.35257144 2.0302857 3.6299048 4.3681904 5.475619 7.1367619 5.475619zM74.9823639 19.228h-4.608v-6.876h-6.84V7.816h6.84V.904h4.608v6.912h6.876v4.536h-6.876z"/></g></svg>' }
        }
      },
      {
        elem: 'label',
        mix: {
          block: 'font',
          mods: {
            family: 'bold'
          }
        },
        content: this.ctx.label ? this.ctx.label : ''
      }
      ]
    },
    {
      block: 'link',
      mix: [
        { block: 'text', mods: { caps: true } },
        { block: 'font', mods: { family: 'bold' } }
      ],
      url: '/',
      content: 'hire us'
    },
    {
      block: 'link',
      mix: [
        { block: 'text', mods: { caps: true } },
        { block: 'font', mods: { family: 'bold' } }
      ],
      url: 'mailto:hire@plus8.pro',
      content: 'hire@plus8.pro'
    }
  ]
});


