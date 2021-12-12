import { StoryContext, Args } from '@storybook/react';

export const storyControlUrlParamPrefix = 'story-control-';

const getConrolArgsFromUrl = (urlSearchParams: URLSearchParams) => {
    const controlArgs: Args = {};
    urlSearchParams.forEach((paramValue, paramName) => {
        if(paramName.toLowerCase().startsWith(storyControlUrlParamPrefix)) {
            const argName = paramName.substring(storyControlUrlParamPrefix.length);
            controlArgs[argName] = paramValue;
        }
    });
    return controlArgs;
}

export default (story: Function, context: StoryContext) => {
    const conrolArgsFromUrl: Args = getConrolArgsFromUrl(new URLSearchParams(window.location.search));
    const newContext = {...context, args: {...context.args, ...conrolArgsFromUrl}};
    return story(newContext);
}