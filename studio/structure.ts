import type {StructureResolver} from 'sanity/structure'

import {MasterDetailIcon} from '@sanity/icons'
import {DashboardIcon} from '@sanity/icons'

const singletons = ['site', 'home']

const hiddenTypes = [...singletons]

export const structure: StructureResolver = (S, context) => {
  return S.list()
    .title('Content')
    .items([
      // Top-level singleton
      S.listItem()
        .title('Site')
        .icon(DashboardIcon)
        .child(S.document().schemaType('site').documentId('site')),

      // Pages folder
      S.listItem()
        .title('Pages')
        .icon(MasterDetailIcon)
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home Page')
                .child(S.document().schemaType('home').documentId('home')),
            ]),
        ),

      // Everything else (exclude hidden types and the ones we added above)
      ...S.documentTypeListItems().filter((listItem) => !hiddenTypes.includes(listItem.getId()!)),
    ])
}
