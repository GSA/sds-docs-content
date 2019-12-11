/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// The example-module file will be auto-generated. As soon as the
// examples are being compiled, the module file will be generated.
import { EXAMPLE_COMPONENTS } from './example-module';
/**
 * Example data
 *   with information about Component name, selector, files used in example, and path to examples
 */
export class ExampleData {
    /**
     * @param {?} example
     */
    constructor(example) {
        if (!example || !EXAMPLE_COMPONENTS.hasOwnProperty(example)) {
            return;
        }
        /** @type {?} */
        const exampleConfig = EXAMPLE_COMPONENTS[example];
        // TODO(tinayuangao): Do not hard-code extensions
        this.exampleFiles = ['html', 'ts', 'css'].map((/**
         * @param {?} extension
         * @return {?}
         */
        extension => `${example}-example.${extension}`));
        this.selectorName = this.indexFilename = `${example}-example`;
        if (exampleConfig.additionalFiles) {
            this.exampleFiles.push(...exampleConfig.additionalFiles);
        }
        /** @type {?} */
        const exampleName = example.replace(/(?:^\w|\b\w)/g, (/**
         * @param {?} letter
         * @return {?}
         */
        letter => letter.toUpperCase()));
        this.description = exampleConfig.title || exampleName.replace(/[\-]+/g, ' ') + ' Example';
        this.componentName = exampleConfig.selectorName ||
            exampleName.replace(/[\-]+/g, '') + 'Example';
    }
}
if (false) {
    /**
     * Description of the example.
     * @type {?}
     */
    ExampleData.prototype.description;
    /**
     * List of files that are part of this example.
     * @type {?}
     */
    ExampleData.prototype.exampleFiles;
    /**
     * Selector name of the example component.
     * @type {?}
     */
    ExampleData.prototype.selectorName;
    /**
     * Name of the file that contains the example component.
     * @type {?}
     */
    ExampleData.prototype.indexFilename;
    /**
     * Name of the example component. For examples with multiple components, this property will
     * include multiple components that are comma separated (e.g. dialog-overview)
     * @type {?}
     */
    ExampleData.prototype.componentName;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1kYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3Nkcy1leGFtcGxlcy9leGFtcGxlLWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sa0JBQWtCLENBQUM7Ozs7O0FBTXBELE1BQU0sT0FBTyxXQUFXOzs7O0lBb0J0QixZQUFZLE9BQWU7UUFDekIsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMzRCxPQUFPO1NBQ1I7O2NBRUssYUFBYSxHQUFHLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztRQUVqRCxpREFBaUQ7UUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRzs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLFlBQVksU0FBUyxFQUFFLEVBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxPQUFPLFVBQVUsQ0FBQztRQUU5RCxJQUFJLGFBQWEsQ0FBQyxlQUFlLEVBQUU7WUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDMUQ7O2NBRUssV0FBVyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsZUFBZTs7OztRQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFDO1FBRXBGLElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDLEtBQUssSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDMUYsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsWUFBWTtZQUN6QixXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUM7SUFDdEUsQ0FBQztDQUNGOzs7Ozs7SUF0Q0Msa0NBQW9COzs7OztJQUdwQixtQ0FBdUI7Ozs7O0lBR3ZCLG1DQUFxQjs7Ozs7SUFHckIsb0NBQXNCOzs7Ozs7SUFNdEIsb0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIGV4YW1wbGUtbW9kdWxlIGZpbGUgd2lsbCBiZSBhdXRvLWdlbmVyYXRlZC4gQXMgc29vbiBhcyB0aGVcbi8vIGV4YW1wbGVzIGFyZSBiZWluZyBjb21waWxlZCwgdGhlIG1vZHVsZSBmaWxlIHdpbGwgYmUgZ2VuZXJhdGVkLlxuaW1wb3J0IHtFWEFNUExFX0NPTVBPTkVOVFN9IGZyb20gJy4vZXhhbXBsZS1tb2R1bGUnO1xuXG4vKipcbiAqIEV4YW1wbGUgZGF0YVxuICogICB3aXRoIGluZm9ybWF0aW9uIGFib3V0IENvbXBvbmVudCBuYW1lLCBzZWxlY3RvciwgZmlsZXMgdXNlZCBpbiBleGFtcGxlLCBhbmQgcGF0aCB0byBleGFtcGxlc1xuICovXG5leHBvcnQgY2xhc3MgRXhhbXBsZURhdGEge1xuXG4gIC8qKiBEZXNjcmlwdGlvbiBvZiB0aGUgZXhhbXBsZS4gKi9cbiAgZGVzY3JpcHRpb246IHN0cmluZztcblxuICAvKiogTGlzdCBvZiBmaWxlcyB0aGF0IGFyZSBwYXJ0IG9mIHRoaXMgZXhhbXBsZS4gKi9cbiAgZXhhbXBsZUZpbGVzOiBzdHJpbmdbXTtcblxuICAvKiogU2VsZWN0b3IgbmFtZSBvZiB0aGUgZXhhbXBsZSBjb21wb25lbnQuICovXG4gIHNlbGVjdG9yTmFtZTogc3RyaW5nO1xuXG4gIC8qKiBOYW1lIG9mIHRoZSBmaWxlIHRoYXQgY29udGFpbnMgdGhlIGV4YW1wbGUgY29tcG9uZW50LiAqL1xuICBpbmRleEZpbGVuYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIGV4YW1wbGUgY29tcG9uZW50LiBGb3IgZXhhbXBsZXMgd2l0aCBtdWx0aXBsZSBjb21wb25lbnRzLCB0aGlzIHByb3BlcnR5IHdpbGxcbiAgICogaW5jbHVkZSBtdWx0aXBsZSBjb21wb25lbnRzIHRoYXQgYXJlIGNvbW1hIHNlcGFyYXRlZCAoZS5nLiBkaWFsb2ctb3ZlcnZpZXcpXG4gICAqL1xuICBjb21wb25lbnROYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoZXhhbXBsZTogc3RyaW5nKSB7XG4gICAgaWYgKCFleGFtcGxlIHx8ICFFWEFNUExFX0NPTVBPTkVOVFMuaGFzT3duUHJvcGVydHkoZXhhbXBsZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBleGFtcGxlQ29uZmlnID0gRVhBTVBMRV9DT01QT05FTlRTW2V4YW1wbGVdO1xuXG4gICAgLy8gVE9ETyh0aW5heXVhbmdhbyk6IERvIG5vdCBoYXJkLWNvZGUgZXh0ZW5zaW9uc1xuICAgIHRoaXMuZXhhbXBsZUZpbGVzID0gWydodG1sJywgJ3RzJywgJ2NzcyddLm1hcChleHRlbnNpb24gPT4gYCR7ZXhhbXBsZX0tZXhhbXBsZS4ke2V4dGVuc2lvbn1gKTtcbiAgICB0aGlzLnNlbGVjdG9yTmFtZSA9IHRoaXMuaW5kZXhGaWxlbmFtZSA9IGAke2V4YW1wbGV9LWV4YW1wbGVgO1xuXG4gICAgaWYgKGV4YW1wbGVDb25maWcuYWRkaXRpb25hbEZpbGVzKSB7XG4gICAgICB0aGlzLmV4YW1wbGVGaWxlcy5wdXNoKC4uLmV4YW1wbGVDb25maWcuYWRkaXRpb25hbEZpbGVzKTtcbiAgICB9XG5cbiAgICBjb25zdCBleGFtcGxlTmFtZSA9IGV4YW1wbGUucmVwbGFjZSgvKD86Xlxcd3xcXGJcXHcpL2csIGxldHRlciA9PiBsZXR0ZXIudG9VcHBlckNhc2UoKSk7XG5cbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZXhhbXBsZUNvbmZpZy50aXRsZSB8fCBleGFtcGxlTmFtZS5yZXBsYWNlKC9bXFwtXSsvZywgJyAnKSArICcgRXhhbXBsZSc7XG4gICAgdGhpcy5jb21wb25lbnROYW1lID0gZXhhbXBsZUNvbmZpZy5zZWxlY3Rvck5hbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhbXBsZU5hbWUucmVwbGFjZSgvW1xcLV0rL2csICcnKSArICdFeGFtcGxlJztcbiAgfVxufVxuIl19
