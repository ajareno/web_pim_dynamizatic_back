import {AuthorizationContext, AuthorizationDecision, AuthorizationMetadata, Authorizer} from '@loopback/authorization';
import { Provider } from '@loopback/core';
import { UserProfile, securityId } from '@loopback/security' ;
import _ from 'lodash';

/**
 * Clase para configurar de manera global la protección de la API
 * Donde podremos configurar cada endpoint protegido o no, por medio del Decorador -> @authorize({allowedRoles: ['admin', 'api']})
 */
export class MyAuthorizationProvider implements Provider<Authorizer> {
    constructor() {}

    /**
     * @returns authenticateFn
     */
    value(): Authorizer {
        return this.authorize.bind(this);
    }

    async authorize(
        authorizationCtx: AuthorizationContext,
        metadata: AuthorizationMetadata,
    ) {
        // No se permite el acceso si faltan detalles de autorización
        let currentUser: UserProfile;

        if (authorizationCtx.principals.length > 0) {
            const user = _.pick(authorizationCtx.principals[0], [
                'id',
                'mail',
                'rol_id',
            ]);
            currentUser = {[securityId]: user.id, nombre: user.mail, rol_id: user.rol_id};
        } else {
            return AuthorizationDecision.DENY; //-> Denegar
        }

        if (!currentUser.rol_id) {
            return AuthorizationDecision.DENY; //-> Denegar
        }
        
        //Autorizar todo lo que no tenga una propiedad permitida Roles
        if (!metadata.allowedRoles) {
            return AuthorizationDecision.ALLOW; //-> Permitir
        }

        let roleIsAllowed = false;
        for (const role of currentUser.rol_id) {
            if (metadata.allowedRoles!.includes(role)) {
                roleIsAllowed = true;
                break;
            }
        }
        if (!roleIsAllowed) {
            return AuthorizationDecision.DENY; //-> Denegar
        } else {
            return AuthorizationDecision.ALLOW; //-> Permitir
        }
    }
}